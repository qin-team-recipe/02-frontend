## 環境構築

yarn を使用してください

- yarn
- yarn dev

## node のバージョン管理について

- Volta で node のバージョン管理を行っています。
- pin 留めしているので、他の node バージョンには影響しません。

## コミット時のチェックについて

- husky と lint-staged により、コミット時に　 eslint と prettier が走ります。

## CSS 設計について

- TailwindCSS を使用することを想定しますが、TailwindCSS で実装しきれない場合の予防線として Sass を入れました。
- CSS Modules 形式で各コンポーネントから呼び出すことを想定します。
- ファイル設計は未定ですので、必要に応じて今後調整をお願いします。

## フェッチ先 LOCALHOST の URL について

バックエンドで設定した Localhost の番号を NEXT_PUBLIC_API_URL に設定してください。<br/>
例）NEXT_PUBLIC_API_URL=http://localhost:8080/api/v1 <br/>
※/api/v1 まで含みます

## Storybook について

- Storybook はコンポーネントの確認用に使用します。
- yarn storybook コマンドでブラウザ上に Storybook が立ち上がります
- src/stiories 内に XXX.stories.ts のようなファイルを作成し、相対参照でコンポーネントを呼び出してください。
- 画面上一番右のアイコンでスマホサイズの確認もできます。
- 現時点で使いこなせてはいませんが、テストができたりアドオンによってより汎用的な使い方ができるようなので、今後調査していきます。


## 状態管理について
- Recoil を使用しています。

## UIライブラリについて
- Material-UI を使用しています。（App Routerのサーバーコンポーネントとしては使えない模様であるため、クライアント側限定）
