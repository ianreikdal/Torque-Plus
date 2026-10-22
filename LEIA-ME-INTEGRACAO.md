# Torque Plus — integrar na sua pasta existente

Este pacote contém **somente arquivos novos ou que precisam ser substituídos**. Ele não substitui seu projeto Expo original.

## 1. Antes de copiar

Faça uma cópia de segurança da pasta `Torque-Plus`.

## 2. Copie para a raiz da pasta original

- `App.tsx` — **substitua** o arquivo inicial original (tela padrão Expo).
- `src/types.ts` e `src/theme.ts` — **crie** a pasta `src` e copie os arquivos.
- `assets/` — **crie** ou mescle esta pasta; contém imagens provisórias exigidas pelo seu `app.json`. Se você já tiver imagens definitivas, preserve as suas.

**Mantenha os arquivos originais:** `.gitignore`, `AGENTS.md`, `app.json`, `index.ts`, `LICENSE`, `package.json`, `package-lock.json`, `tsconfig.json`.

## 3. Instale a única dependência adicional

Abra o terminal do VS Code na pasta original e execute:

```bash
npm install
npx expo install @react-native-async-storage/async-storage
npx tsc --noEmit
npx expo start --clear
```

Com o emulador Android aberto, pressione `a` no terminal. A instalação do AsyncStorage atualiza automaticamente `package.json` e `package-lock.json` do **seu projeto original**.

## 4. O que esperar

- Primeiro acesso: escolha **Cadastrar**, informe dados fictícios e uma senha fictícia com 8+ caracteres.
- Cadastre um veículo, depois solicite um serviço.
- Login, veículos, serviços e perfil são salvos no aparelho com AsyncStorage.

## Limitações

- Esta é uma demonstração escolar: senha guardada localmente sem proteção apropriada. **Não use senhas reais.**
- Sem servidor, os serviços novos permanecem pendentes; não há painel da oficina.
- A navegação da V1 usa estado interno em `App.tsx`, **ainda não Expo Router**, apesar da orientação no `AGENTS.md`. Migração futura recomendada.
- Design inspirado no PDF do Figma, não reprodução exata.
- Não foi possível validar a execução em um emulador Android neste ambiente.
