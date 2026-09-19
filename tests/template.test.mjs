import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import site from "../site-data.mjs";
import { bookingMode, categoryMode, specialtyMode } from "../template-rules.mjs";
const html = fs.readFileSync("out/index.html", "utf8");
test("fresh Master Engine v2 structure",()=>{assert.match(html,/site-root/);assert.match(html,/id="mobile-portfolio"/);assert.match(html,/Смотреть все работы/);assert.match(html,/mct-work-placeholder/);});
test("TAN-0012 confirmed data",()=>{assert.equal(site.master.name,"Наталья");assert.equal(site.brand.name,"Наталья Фадеева");assert.equal(site.master.experienceYears,"14");assert.equal(site.contacts.phoneHref,"tel:+79251631065");assert.equal(site.images.gallery.length,0);assert.equal(specialtyMode(site),"nails");assert.equal(categoryMode(site),"two");assert.equal(bookingMode(site),"contact");assert.equal(site.services.groups[0].services.length,4);assert.equal(site.services.groups[1].services.length,2);assert.match(html,/mct-palette-stage/);assert.match(html,/эксперт по маникюру и педикюру/);assert.match(html,/tel:\+79251631065/);});
