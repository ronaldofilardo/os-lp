# bkpOSLP — v7: correção do celular via servidor local

## Causa raiz (confirmada)
O servidor de desenvolvimento do Next 16 devolve 403 para todo recurso /_next/* (inclusive os chunks de JS)
quando a página é aberta por um IP da rede (ex.: 192.168.x.x no celular) que não esteja em `allowedDevOrigins`.
Resultado no aparelho: HTML sem JavaScript -> sem hidratação -> blocos .reveal presos em opacity:0
(os retângulos vazios) e só o cubo CSS de reserva no lugar das cenas 3D.

## Correções
1. next.config.ts: `allowedDevOrigins` com as faixas privadas de rede (192.168.*.*, 10.*.*.*, 172.16-31.*.*, *.local).
   Só vale em `next dev`; não afeta o build de produção. IP/host extra:
     PowerShell:  $env:ALLOWED_DEV_ORIGINS="192.168.0.50"; pnpm dev
2. src/motion/Reveal.tsx: agora é "progressive enhancement". O HTML do servidor vem VISÍVEL; o conteúdo só é
   escondido depois que o JS roda e apenas se o elemento estiver abaixo da dobra. Se o JS falhar/demorar
   (3G, bloqueio, crawler), nada fica invisível.

## Aplicar
1. Apague os arquivos renomeados da v4 (se ainda existirem):
     Remove-Item src\three\fitCamera.ts, src\three\fitCamera.test.ts -ErrorAction SilentlyContinue
2. Extraia o zip por cima do projeto.
3. REINICIE o servidor (a config só é lida na partida):  pnpm dev
4. No celular, recarregue a página (feche e abra de novo a aba se ela ficou em cache).

## Testes (159 em 36 arquivos)
  pnpm test
  pnpm vitest run src/motion/Reveal.test.tsx src/config/nextConfig.test.ts
  pnpm lint; pnpm exec tsc --noEmit; pnpm test
