---
title: "Fractional Land-Share Sales (Feddan & Kirat)"
metaDescription: "Sell land in fractional shares — Feddan, Kirat, Sahm — with auto-split cost and size, and sold-share numbers locked permanently the moment a share sells."
layoutStyle: "modern-hero"
heroImage: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80"
statsLabel: "Rounding Drift on Share Totals"
statsValue: "EGP 0"
benefit1_icon: "📐"
benefit1_title: "Auto-Split Cost & Size"
benefit1_desc: "One project total divides across N shares — the last share absorbs any rounding, so the sum always matches exactly."
benefit2_icon: "🔒"
benefit2_title: "Sold Shares Lock Automatically"
benefit2_desc: "The moment a share is booked, its price and size freeze — re-pricing the rest never touches what a buyer already agreed to."
benefit3_icon: "📏"
benefit3_title: "Real Egyptian Land Units"
benefit3_desc: "Feddan, Kirat, Sahm, and Square Meters — seeded natively alongside standard measurements, not bolted on as a label."
faq1_q: "If I change the total land size or price after some shares are already sold, what happens to the sold shares?"
faq1_a: "Nothing. Unova's Recalculate Allocation only ever re-splits the remaining, unsold portion. A share that's already sold or booked keeps the exact price and size it was sold at."
faq2_q: "What if the total doesn't divide evenly across the number of shares?"
faq2_a: "Every share except the last gets the same rounded-down value; the last share absorbs whatever's left over. The shares always sum back to exactly your total — no leftover piastre unaccounted for."
faq3_q: "Can I change the number of shares after the project is created?"
faq3_a: "Yes, as long as no share has been sold yet. Once even one share is sold or booked, the share count locks to protect buyers' existing deals — you can still re-price the unsold shares, just not change how many there are."
feature1: "Auto-generated Share 1...N units on project save"
feature2: "Floor-and-residual cost/size split (always reconciles to the total)"
feature3: "Sold-share price and size locking"
feature4: "One-click Recalculate Allocation for the unsold remainder"
---

Land in Egypt is routinely sold as fractional shares rather than whole plots — five Feddan divided ten ways among ten buyers, each owning a fixed fraction. Spreadsheet-based tracking makes this error-prone the moment a share sells and the remaining math has to be redone by hand.

**Unova's Land Share module** treats this as a first-class business model, not a workaround on top of a generic "unit" object.

---

## 1. How the Split Works

When you set up a Land Share project with a total size and total cost, Unova automatically generates one Share unit per share you specify:

* **Even division:** the total cost and total size are divided evenly across every share.
* **Exact reconciliation:** each share is rounded down to the nearest piastre/decimal; the last share absorbs whatever rounding residual is left, so the shares always sum back to exactly your original total — never a piastre short or over.

---

## 2. What Happens Once a Share Sells

The moment a share is marked sold or booked, its price and size are frozen. If you later update the project's total cost, total size, or per-share price:

* **Sold shares are untouched.** Their numbers stay exactly what the buyer agreed to.
* **Unsold shares absorb the change.** The remaining budget and remaining size are re-split only across whatever's still unsold.
* **Share count locks once anything sells.** You can still re-price what's left, but the total number of shares can't change out from under an existing buyer.

This is what "Recalculate Allocation" does under the hood — and it's safe to run more than once. If nothing has changed since the last run, running it again changes nothing.

---

## 3. Built on Real Egyptian Land Units

Feddan, Kirat, Sahm, and Square Meters are available as native measurement units alongside square meters — so a project's "5 Feddan, 10 shares" setup reads the way your team actually talks about the land, not translated into square footage first.

---

## See It on Your Own Project

Bring a real land-share deal to the demo and we'll walk through the split live — including what happens when you change the total after a few shares are already sold.

[Book a Free Live Demo](/demo) | [Contact Sales via WhatsApp](https://wa.me/201000000000) | [Explore All ERP Solutions](/solutions)
