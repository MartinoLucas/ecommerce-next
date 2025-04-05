// ecosystem.config.js
module.exports = {
    apps: [
      {
        name: "ecommerce-next", // nombre del proceso en PM2
        script: "pnpm",
        args: "start",
        cwd: "/home/root/deploy/ecommerce", // 📁 Ruta del proyecto en tu VPS (ajustá si es distinta)
        interpreter: "none", // usa el binario directamente (pnpm)
        env: {
          NODE_ENV: "production",
          PORT: 3000, // o el que estés usando
        },
      },
    ],
  };
  