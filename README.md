# React AbERP

Demo: https://react-erp-landing-page.vercel.app/

### Introduction

AbERP merupakan aplikasi ERP untuk mentransformasi dan mandigitalisasi kebutuhan bisnis anda.

### Analisa Kebutuhan Sistem

Berdasarkan dari design yang diberikan yaitu terdapat dua halaman (landing page dan login page) dikarenakan jumlah page yang dibutuhkan tidak terlalu banyak maka diputuskan untuk **memakai React Vite tanpa menggunakan Nextjs supaya bundle size aplikasi lebih kecil**.

Digunakan juga **React Router sebagai router navigasi antar halaman**, **Tailwind dan ShadcnUI untuk pembuatan component yang lebih cepat** dan juga **Motion sebagai animasi element HTML**.

Selain itu menggunakan **Eslint dan Prettier untun menunjang proses development** serta **Vitest untuk library unit testing**

### Struktur

1. Landing Page (halaman utama)
   Terdiri dari beberapa section, yaitu:
   1. Hero/About (sebagai CTA)
   2. Pricing Tier (menawarkan pilihan plan)
   3. Contact (komunikasi dengan form email)
2. Login Page (halaman login)

### Tech Stacks

1. React + Vite + Typescript
2. React Router
3. Tailwind + ShadcnUI
4. Motion
5. Eslint (linter)
6. Prettier (formatter)
7. Vitest (testing)

### Getting Started

#### 1. Run Application

```
npm run dev
```

open in browser [http://localhost:5173](http://localhost:5173)

#### 2. Run Test

```
npm test
```

example output:

```
TAP version 13
# Subtest: find even in recursive object
ok 1 - find even in recursive object
  ---
  duration_ms: 2.147014
  type: 'suite'
  ...
TAP version 13
TAP version 13
# Subtest: Sort array
# Subtest: Reduce n number of array
 ✓ test/3-nested_object.test.ts (1 test) 3ms
ok 1 - Reduce n number of array
  ---
  duration_ms: 2.727043
  type: 'suite'
  ...
ok 1 - Sort array
  ---
  duration_ms: 2.742252
  type: 'suite'
  ...
 ✓ test/1-sort_array.test.ts (1 test) 4ms
 ✓ test/2-max_sum.test.ts (3 tests) 4ms

 Test Files  3 passed (3)
      Tests  5 passed (5)
   Start at  18:58:27
   Duration  275ms (transform 71ms, setup 0ms, collect 131ms, tests 11ms, environment 1ms, prepare 197ms)

 PASS  Waiting for file changes...
       press h to show help, press q to quit
```
