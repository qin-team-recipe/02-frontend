## 環境構築

yarn を使用してください

- yarn
- yarn dev

## node のバージョン管理について

- Volta で node のバージョン管理を行っています。
- pin 留めしているので、他の node バージョンには影響しません。

## コミット時のチェックについて

- husky と lint-staged により、コミット時に　 eslint と prettier が走ります。

## CSS設計について
- TailwindCSSを使用することを想定しますが、TailwindCSSで実装しきれない場合の予防線としてSassを入れました。
- CSS Modules形式で各コンポーネントから呼び出すことを想定します。
- ファイル設計は未定ですので、必要に応じて今後調整をお願いします。

