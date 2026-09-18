import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import site from "../site-data.mjs";
import { bookingMode, categoryMode, specialtyMode } from "../template-rules.mjs";

const html = fs.readFileSync("out/index.html", "utf8");

test("client static export is built", () => {
  assert.match(html, /site-root/);
  assert.match(html, /Наталья Фадеева/);
});

test("verified client identity and template mode are populated", () => {
  assert.equal(site.master.name, "Наталья Фадеева");
  assert.equal(specialtyMode(site), "nails");
  assert.equal(site.services.groups.length, 2);
  assert.equal(site.contacts.phoneDisplay, "");
});

test("service category mode is correct", () => {
  assert.equal(categoryMode(site), "two");
});

test("booking mode follows verified data", () => {
  assert.equal(bookingMode(site), "unavailable");
});

test("canonical stylesheet and runtime are present", () => {
  assert.ok(fs.existsSync("app/template.css"));
  assert.ok(fs.existsSync("public/template-runtime.js"));
});
