# 要件定義

| 項目 | 内容 |
| --- | --- |
| Rank | 76 |
| Domain | WebApp |
| Idea No. | 10 |
| Repository | fluid-physics-preset-share |
| 主な公開先 | GitHub Pages / GitHub Release |

## 背景

調整値や見た目の差が後から再現しにくい。

## 目的

Fluidやphysicsシミュレーションのプリセットを保存、比較、公開する。 入力、確認、履歴保存、次アクションを同じ作業単位で扱えるようにする。

## 必須要件

- physics preset を複数件まとめて検証できる。
- required fields: `id`, `title`, `presetName`, `parameters`, `previewUrl`, `owner`。
- warning field: `stabilityNote`。
- 代表シナリオ、QCDS metrics、docs ZIP、release evidence を再生成できる。
