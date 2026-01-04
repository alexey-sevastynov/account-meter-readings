import "dotenv/config";
import { exec } from "child_process";
import chalk from "chalk";

function getRequiredEnvVariable(envKey: string) {
    const envValue = process.env[envKey];

    if (!envValue) {
        console.error(chalk.red.bold(`Missing required environment variable: ${envKey}`));
        process.exit(1);
    }

    return envValue;
}

function logDevServerStartInfo(serverUrl: string, backendMode: string) {
    console.log(chalk.green.bold("--------------------------------------------"));
    console.log(chalk.green.bold("Starting Next.js dev server\n"));
    console.log(chalk.cyan(`Backend URL: ${serverUrl}`));
    console.log(chalk.white(`Backend mode: ${backendMode}`));
    console.log(chalk.gray("ℹ︎  Backend mode can be changed in the .env file"));
    console.log(chalk.green.bold("--------------------------------------------\n"));
}

function getBackendFullUrl(backendMode: string, backendUrl: string, backendPort: string) {
    if (backendMode === "local") {
        return `http://localhost:${backendPort}`;
    }

    return backendUrl;
}

const devServerConfig = {
    frontendPort: 3228,
    backendPort: getRequiredEnvVariable("NEXT_PUBLIC_API_PORT"),
    backendUrl: getRequiredEnvVariable("NEXT_PUBLIC_API_URL"),
    backendMode: getRequiredEnvVariable("NEXT_PUBLIC_API_MODE"),
};

const backendFullUrl = getBackendFullUrl(
    devServerConfig.backendMode,
    devServerConfig.backendUrl,
    devServerConfig.backendPort,
);

logDevServerStartInfo(backendFullUrl, devServerConfig.backendMode);

const child = exec(`next dev --turbopack --port ${devServerConfig.frontendPort}`);

child.stdout?.on("data", (data: string | Buffer) => process.stdout.write(data));
child.stderr?.on("data", (data: string | Buffer) => process.stderr.write(data));

child.on("exit", (code: number | null) => {
    console.log(chalk.red.bold(`\n Dev server exited with code ${code}`));
});
