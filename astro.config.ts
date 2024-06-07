import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

const sidebar = [
    // {
    //     label: "2024 Projects",
    //     items: [
    //     ]
    // },
    {
        label: "🌟 Mark's Favorites",
        items: [
            {
                label: "SOC-0001: Create a Reactive State Library for Swift",
                link: "/ideas/0001-swift-signals/",
            },
            {
                label: "SOC-0002: Create a Torrent Automation System",
                link: "/ideas/0002-torrent-automation/",
            },
            {
                label: "SOC-0007: Create a High Performance Fountain Parser",
                link: "/ideas/0007-fountain-parser/",
            },
            {
                label: "SOC-0015: Create a New Federated Platform Based on ActivityPub",
                link: "/ideas/0015-new-federated-platform/",
            },
        ],
    },
    {
        label: "💡 Other Ideas",
        items: [
            // {
            //     label: "SOC-0001: Create a Reactive State Library for Swift",
            //     link: "/ideas/0001-swift-signals/",
            // },
            // {
            //     label: "SOC-0002: Create a Torrent Automation System",
            //     link: "/ideas/0002-torrent-automation/",
            // },
            {
                label: "SOC-0003: Fill in VS Code's Swift Development Gaps",
                link: "/ideas/0003-swift-vs-code/",
            },
            {
                label: "SOC-0004: Implement a Solid.js Renderer for UIKit",
                link: "/ideas/0004-solid-js-uikit/",
            },
            {
                label: "SOC-0005: Create Macros to Customize Swift.Codable",
                link: "/ideas/0005-codable-macros/",
            },
            {
                label: "SOC-0006: Explore the Private TikTok API",
                link: "/ideas/0006-private-tiktok-api/",
            },
            // {
            //     label: "SOC-0007: Create a High Performance Fountain Parser",
            //     link: "/ideas/0007-fountain-parser/",
            // },
            {
                label: "SOC-0008: Create a Discourse iOS Client",
                link: "/ideas/0008-discourse-ios-client/",
            },
            {
                label: "SOC-0009: Create a Local Version of Firebase Data Connect",
                link: "/ideas/0009-firebase-data-connect/",
            },
            {
                label: "SOC-0010: Make Tweaking Easier on macOS",
                link: "/ideas/0010-macos-tweaking/",
            },
            {
                label: "SOC-0011: Create a Multiplatform ORM for Swift Utilizing Macros",
                link: "/ideas/0011-swift-orm/",
            },
            {
                label: "SOC-0012: Create a Swift Web Server Framework",
                link: "/ideas/0012-swift-web-server/",
            },
            {
                label: "SOC-0013: SwiftUI Server Components",
                link: "/ideas/0013-swiftui-server-components/",
            },
            {
                label: "SOC-0014: Web Framework & Meta-Framework for Swift Wasm",
                link: "/ideas/0014-swift-wasm-web-framrwork/",
            },
            // {
            //     label: "SOC-0015: Create a New Federated Platform Based on ActivityPub",
            //     link: "/ideas/0015-new-federated-platform/",
            // },
            {
                label: "SOC-0016: Create a Custom Android Launcher",
                link: "/ideas/0016-android-launcher/",
            },
            {
                label: "SOC-0017: Create a Custom Desktop Environment for Linux",
                link: "/ideas/0017-linux-desktop-environment/",
            },
            {
                label: "SOC-0018: Create a Custom Linux Distro",
                link: "/ideas/0018-linux-distro/",
            },
            {
                label: "SOC-0019: Embed a WebAssembly Runtime in the Kernel",
                link: "/ideas/0019-wasm-kernel/",
            },
            {
                label: "SOC-0020: Create a WebAssembly Server Runtime",
                link: "/ideas/0020-wasm-server-runtime/",
            },
            {
                label: "SOC-0021: Wrap macOS's XPC API with a Distributed Actor API",
                link: "/ideas/0021-xpc-distributed-actors/",
            },
            {
                label: "SOC-0022: Rewrite Homebrew with Swift",
                link: "/ideas/0022-homebrew-swift/",
            },
            {
                label: "SOC-0023: Port APT to macOS",
                link: "/ideas/0023-macos-apt/",
            },
            {
                label: "SOC-0024: Create an All-in-One JavaScript Runtime with Swift",
                link: "/ideas/0024-javascript-runtime-swift/",
            },
            {
                label: "SOC-0025: Port the TypeScript Type Checker to Swift",
                link: "/ideas/0025-typescript-type-checker-swift/",
            },
            {
                label: "SOC-0026: Swift Language Mode for Astro",
                link: "/ideas/0026-astro-swift-language-mode/",
            },
            {
                label: "SOC-0027: Port React Router v7 to Solid.js",
                link: "/ideas/0027-port-react-router-to-solid/",
            },
        ],
    },
];

export default defineConfig({
    integrations: [
        starlight({
            title: "Summer of Code",
            sidebar,
            expressiveCode: {
                themes: ["dracula", "github-light"],
                styleOverrides: {
                    codeFontFamily: `"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, 
                    Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
                },
            },
            customCss: ["./src/styles/custom.css"],
            components: {
                SiteTitle: "./src/components/Title.astro",
                // Head: "./src/components/ViewTransitons/Head.astro",
                // Sidebar: "./src/components/ViewTransitons/Sidebar.astro",
            },
            head: [
                // {
                //     tag: "meta",
                //     attrs: {
                //         property: "og:title",
                //         content: "You're invited to brunch!",
                //     },
                // },
                {
                    tag: "meta",
                    attrs: {
                        property: "og:type",
                        content: "website",
                    },
                },
                {
                    tag: "meta",
                    attrs: {
                        property: "og:image",
                        content: "/social.webp",
                    },
                },
                // {
                //     tag: "meta",
                //     attrs: {
                //         property: "og:url",
                //         content: "Astro.url"
                //     }
                // },
                {
                    tag: "meta",
                    attrs: {
                        property: "og:description",
                        content:
                            "Summer of Code is a program focused on enabling more developers to work on open source software.",
                    },
                },
            ],
        }),
    ],
});
