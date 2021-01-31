# music library2

## 1は動かなかったのでagain

bulma
buefy
fortawesome/fontawesome

## コンポーネント構成

```js
- <App>
  - <MusicIndex> --親コンポーネント
    - <PagenatetableBody> --表示リスト
    - <MusisSort> ---Headerとsortするロジック
    
    
```

## view作成

### MusicIndex.vue

- dataプロパティjsonファイルのインポート
- dataの表示

## 課題

- 一度に読み取ってそれらを操作する要素が多すぎます
- 多くのものが配列でレンダリングおよび再レンダリングされます
データを分割してサブセットを作成するだけで、ページネーションとも呼ばれます

## 一度に表示させるデータ量を操作する

### PagenateTableBody.vue

- propsの受取
- pageのサイズを50に設定
- computedで計算
  - 本来3000以上あるdataを50に絞る計算(slice)
  - スクロールイベントの条件に表示データの数を使う目的で作成するtotalPagess

### MusicSort.vue(MusiceIndexのヘッダーとソート機能)

- 子コンポーネント
  
- ソート機能
  - 使用メソッド
    - slice
    - sort
    - ToUpperCase
  - 比較演算子
    - if文
  - computedでデータ配列から新しい配列へ
    - sortする時にdataに初期値をおいて操作するところがうまい
  - $emit

## Playlist.vueの作成

## playlistの課題

- playlistの作成
- playlistのナビゲート
- playlistに曲を追加する
- playlistの管理の拡張

### 二つのコンポーネントに分離する

- カスタムプレイリストは、複数のブラウザセッションで利用できる場合に適しています。
- localstorageを使用してdataを保存

## possible ways to add songs

- 曲をプレイリスト要素にドラッグアンドドロップします
- 各曲のコンテキストメニュー
- プレイリストを選択し、ワンクリックで追加アクションを実行

## カスタマイズするplaylist

- プレイリスト内の曲を削除する
- プレイリストの削除
- プレイリストのリネーム
- 
