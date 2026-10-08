// ========================================
// 書き手一覧
// ========================================

const authors = {

  author01: {
    name: "書き手A",

    sns: [
      {
        name: "X",
        url: "https://x.com/authorA"
      },
      {
        name: "bsky",
        url: "https://bsky.app/profile/authorA.bsky.social"
      }
    ]
  },


  author02: {
    name: "書き手B",

    sns: [
      {
        name: "X",
        url: "https://x.com/authorB"
      }
    ]
  },


  author03: {
    name: "書き手C",

    sns: [
      {
        name: "bsky",
        url: "https://bsky.app/profile/authorC.bsky.social"
      }
    ]
  }

};

// ========================================
// 小話一覧
// ========================================

const stories = [

  {
    id: "01",
    title: "小話タイトル01",
    theme: "テーマ01",
    author: "author01",

    body: `
      <p>
        　ここに1作目の本文を入れます。
      </p>

      <p>
        「会話文はこのように入れます」
      </p>

      <p>
        　段落ごとに p タグで囲みます。
      </p>
    `
  },

  {
    id: "02",
    title: "小話タイトル02",
    theme: "テーマ02",
    author: "author02",

    body: `
      <p>
        　ここに2作目の本文を入れます。
      </p>

      <p>
        「会話文」
      </p>

      <p>
        　本文の続きです。
      </p>
    `
  },

  {
    id: "03",
    title: "小話タイトル03",
    theme: "テーマ03",
    author: "author03",

    body: `
      <p>
        　ここに3作目の本文を入れます。
      </p>
    `
  },

  {
    id: "04",
    title: "小話タイトル04",
    theme: "テーマ04",
    author: "author01",

    body: `
      <p>
        　ここに4作目の本文を入れます。
      </p>
    `
  },

  {
    id: "05",
    title: "小話タイトル05",
    theme: "テーマ05",
    author: "author04",

    body: `
      <p>
        　ここに5作目の本文を入れます。
      </p>
    `
  },

  {
    id: "06",
    title: "小話タイトル06",
    theme: "テーマ06",
    author: "author02",

    body: `
      <p>
        　ここに6作目の本文を入れます。
      </p>
    `
  },

  {
    id: "07",
    title: "小話タイトル07",
    theme: "テーマ07",
    author: "author03",

    body: `
      <p>
        　ここに7作目の本文を入れます。
      </p>
    `
  },

  {
    id: "08",
    title: "小話タイトル08",
    theme: "テーマ08",
    author: "author01",

    body: `
      <p>
        　ここに8作目の本文を入れます。
      </p>
    `
  },

  {
    id: "09",
    title: "小話タイトル09",
    theme: "テーマ09",
    author: "author04",

    body: `
      <p>
        　ここに9作目の本文を入れます。
      </p>
    `
  },

  {
    id: "10",
    title: "小話タイトル10",
    theme: "テーマ10",
    author: "author02",

    body: `
      <p>
        　ここに10作目の本文を入れます。
      </p>
    `
  },

  {
    id: "11",
    title: "小話タイトル11",
    theme: "テーマ11",
    author: "author03",

    body: `
      <p>
        　ここに11作目の本文を入れます。
      </p>
    `
  },

  {
    id: "12",
    title: "小話タイトル12",
    theme: "テーマ12",
    author: "author01",

    body: `
      <p>
        　ここに12作目の本文を入れます。
      </p>
    `
  },

  {
    id: "13",
    title: "小話タイトル13",
    theme: "テーマ13",
    author: "author04",

    body: `
      <p>
        　ここに13作目の本文を入れます。
      </p>
    `
  },

  {
    id: "14",
    title: "小話タイトル14",
    theme: "テーマ14",
    author: "author02",

    body: `
      <p>
        　ここに14作目の本文を入れます。
      </p>
    `
  }

];
