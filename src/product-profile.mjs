export const productProfile = {
  "repository": "fluid-physics-preset-share",
  "title": "流体・物理プリセット共有",
  "domain": "WebApp",
  "hostApp": null,
  "rank": 76,
  "tier": "P2",
  "ideaNo": 10,
  "overview": "Fluidやphysicsシミュレーションのプリセットを保存、比較、公開する。 入力、確認、履歴保存、次アクションを同じ作業単位で扱えるようにする。",
  "problem": "調整値や見た目の差が後から再現しにくい。",
  "differentiation": "設定、スクショ、説明文を1つの共有カードにする。",
  "publish": "GitHub Pages / GitHub Release",
  "surface": "Static WebApp + CLI validation core",
  "entity": "physics preset",
  "requiredFields": [
    "id",
    "title",
    "presetName",
    "parameters",
    "previewUrl",
    "owner"
  ],
  "warningField": "stabilityNote",
  "qcdsManualTestCap": "S-",
  "qcdsTarget": "A-",
  "benchmarkRepos": [
    "Sunmax0731/project-portfolio-generator",
    "Sunmax0731/release-output-check-flow",
    "Sunmax0731/movie-telop-transcriber",
    "Sunmax0731/codex-remote-android"
  ]
};
