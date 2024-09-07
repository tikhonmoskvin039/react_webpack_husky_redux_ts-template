import webpack, { Configuration, DefinePlugin } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import ESLintPlugin from "eslint-webpack-plugin";
import path from "path";
import CopyPlugin from "copy-webpack-plugin";
import { EsbuildPlugin } from "esbuild-loader";

export function buildPlugins({ mode,
    paths,
    analyzer,
    platform, }: BuildOptions): Configuration['plugins'] {
    const isDev = mode === "development";
    const isProd = mode === "production";

    const plugins: Configuration["plugins"] = [
        new HtmlWebpackPlugin({
            template: paths.html,
            favicon: path.resolve(paths.public, "favicon.ico"),
        }),
        new DefinePlugin({
            __PLATFORM__: JSON.stringify(platform),
            __ENV__: JSON.stringify(mode),
        }),
    ];

    if (isDev) {
        plugins.push(new ESLintPlugin({
            extensions: ['ts', 'tsx', 'js', 'jsx'],
            overrideConfig: {
                parser: '@typescript-eslint/parser',
                parserOptions: {
                    ecmaVersion: 'latest',
                    sourceType: 'module',
                },
                plugins: ['@typescript-eslint'],

                rules: {
                    // Ваши правила здесь (всё что будет попадать в ошибки будет сыпаться лайвом в консоль)
                    'no-console': 1,
                },
            }
        }));
        plugins.push(new webpack.ProgressPlugin());
        /** Выносит проверку типов в отдельный процесс: не нагружая сборку */
        plugins.push(new ForkTsCheckerWebpackPlugin());
        /* Позволяет обновлять приложение без перезагрузки страницы, работает с TS в связке с react-refresh-typescript*/
        plugins.push(new ReactRefreshWebpackPlugin());
        plugins.push(
            new EsbuildPlugin({
                minify: true,
            })
        );
    }

    if (isProd) {
        plugins.push(
            new MiniCssExtractPlugin({
                filename: "css/[name].[contenthash:8].css",
                chunkFilename: "css/[name].[contenthash:8].css",
            })
        );
        // ! copy-webpack-plugin не предназначен для копирования файлов, созданных в процессе сборки; скорее, это копирование файлов, которые уже существуют в дереве исходного кода, как часть процесса сборки.
        // Перемещает необходимые файлы в сборку
        plugins.push(
            new CopyPlugin({
                patterns: [
                    {
                        from: path.resolve(paths.public, "locales"),
                        to: path.resolve(paths.output, "locales"),
                    },
                ],
            })
        );
    }

    if (analyzer) {
        plugins.push(new BundleAnalyzerPlugin());
    }

    return plugins
}

/** // !This is the fastest minimum using WP plugins config:
            return [new HtmlWebpackPlugin({ template: paths.html }),
            new MiniCssExtractPlugin(),
            new DefinePlugin({
                __PLATFORM__: JSON.stringify(platform),
            }),
            new ForkTsCheckerWebpackPlugin(),
            new ReactRefreshWebpackPlugin()]
*/
