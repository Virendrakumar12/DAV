module.exports = {

"[externals]/fs [external] (fs, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}}),
"[externals]/stream [external] (stream, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}}),
"[externals]/zlib [external] (zlib, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}}),
"[externals]/react-dom [external] (react-dom, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("react-dom", () => require("react-dom"));

module.exports = mod;
}}),
"[externals]/framer-motion [external] (framer-motion, esm_import)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
const mod = await __turbopack_context__.y("framer-motion");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/components/Navbar.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "default": (()=>Navbar)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/router.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/framer-motion [external] (framer-motion, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [ssr] (ecmascript) <export default as X>");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__
]);
([__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
'use client';
;
;
;
;
;
const loginOptions = [
    {
        role: 'Student',
        path: '/login/student',
        emoji: '🧑‍🎓'
    },
    {
        role: 'Parent',
        path: '/login/parent',
        emoji: '👨‍👩‍👧'
    },
    {
        role: 'Teacher',
        path: '/login/teacher',
        emoji: '👨‍🏫'
    },
    {
        role: 'School',
        path: '/login/school',
        emoji: '🏫'
    }
];
// Navigation links with full paths
const navLinks = [
    {
        label: 'Home',
        path: '/'
    },
    {
        label: 'About',
        path: '/about'
    },
    {
        label: 'Teachers',
        path: '/teachers'
    },
    {
        label: 'Features',
        path: '/features'
    },
    {
        label: 'Stats',
        path: '/stats'
    },
    {
        label: 'Testimonials',
        path: '/testimonials'
    },
    {
        label: 'Contact',
        path: '/contact'
    }
];
function Navbar() {
    const [isMenuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [isModalOpen, setModalOpen] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleLoginRedirect = (path)=>{
        setModalOpen(false);
        router.push(path);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("nav", {
                className: "fixed top-0 left-0 w-full bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 text-white shadow-lg z-50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "max-w-7xl mx-auto px-4 py-3 flex justify-between items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__["motion"].div, {
                                className: "text-xl font-extrabold cursor-pointer flex items-center gap-2",
                                onClick: ()=>router.push('/'),
                                whileHover: {
                                    scale: 1.05
                                },
                                whileTap: {
                                    scale: 0.95
                                },
                                children: [
                                    "🏫",
                                    ' ',
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        className: "bg-white text-indigo-600 px-2 py-1 rounded",
                                        children: "DAV PUBLIC SCHOOL"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.js",
                                        lineNumber: 47,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Navbar.js",
                                lineNumber: 40,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                                className: "hidden md:flex gap-6 font-semibold text-white tracking-wide",
                                children: navLinks.map(({ label, path })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__["motion"].li, {
                                        whileHover: {
                                            scale: 1.1,
                                            rotate: -2
                                        },
                                        transition: {
                                            type: 'spring',
                                            stiffness: 300
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                            onClick: ()=>router.push(path),
                                            className: "hover:text-yellow-300 transition capitalize",
                                            children: label
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.js",
                                            lineNumber: 60,
                                            columnNumber: 17
                                        }, this)
                                    }, label, false, {
                                        fileName: "[project]/components/Navbar.js",
                                        lineNumber: 55,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.js",
                                lineNumber: 53,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__["motion"].div, {
                                className: "hidden md:block",
                                whileHover: {
                                    scale: 1.05
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setModalOpen(true),
                                    className: "bg-yellow-400 text-indigo-800 px-5 py-2 rounded-full font-bold hover:bg-yellow-300 transition",
                                    children: "🎉 Login"
                                }, void 0, false, {
                                    fileName: "[project]/components/Navbar.js",
                                    lineNumber: 72,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.js",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "md:hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setMenuOpen(!isMenuOpen),
                                    children: isMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        size: 24
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.js",
                                        lineNumber: 83,
                                        columnNumber: 29
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                        size: 24
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.js",
                                        lineNumber: 83,
                                        columnNumber: 47
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/Navbar.js",
                                    lineNumber: 82,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.js",
                                lineNumber: 81,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Navbar.js",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__["AnimatePresence"], {
                        children: isMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__["motion"].ul, {
                            initial: {
                                height: 0
                            },
                            animate: {
                                height: 'auto'
                            },
                            exit: {
                                height: 0
                            },
                            className: "md:hidden bg-white text-indigo-800 px-6 py-4 space-y-3 border-t rounded-b-lg shadow-md",
                            children: [
                                navLinks.map(({ label, path })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                router.push(path);
                                                setMenuOpen(false);
                                            },
                                            className: "block w-full text-left hover:text-blue-600 transition capitalize",
                                            children: label
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.js",
                                            lineNumber: 99,
                                            columnNumber: 19
                                        }, this)
                                    }, label, false, {
                                        fileName: "[project]/components/Navbar.js",
                                        lineNumber: 98,
                                        columnNumber: 17
                                    }, this)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            setModalOpen(true);
                                            setMenuOpen(false);
                                        },
                                        className: "w-full text-left text-blue-600 font-semibold",
                                        children: "🎉 Login"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.js",
                                        lineNumber: 111,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/Navbar.js",
                                    lineNumber: 110,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Navbar.js",
                            lineNumber: 91,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Navbar.js",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Navbar.js",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__["AnimatePresence"], {
                children: isModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__["motion"].div, {
                    className: "fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50",
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__["motion"].div, {
                        className: "bg-white rounded-3xl shadow-2xl w-[90%] max-w-md p-6 relative",
                        initial: {
                            y: -100,
                            opacity: 0
                        },
                        animate: {
                            y: 0,
                            opacity: 1
                        },
                        exit: {
                            y: 100,
                            opacity: 0
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                onClick: ()=>setModalOpen(false),
                                className: "absolute top-3 right-3 text-gray-400 hover:text-black",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/components/Navbar.js",
                                    lineNumber: 146,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.js",
                                lineNumber: 142,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-extrabold mb-5 text-center text-indigo-700",
                                children: "Select Login Role"
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.js",
                                lineNumber: 149,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-4",
                                children: loginOptions.map(({ role, path, emoji })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__["motion"].button, {
                                        onClick: ()=>handleLoginRedirect(path),
                                        className: "w-full bg-gradient-to-r from-blue-100 to-blue-200 hover:from-yellow-100 hover:to-yellow-200 text-blue-900 py-3 rounded-xl flex flex-col items-center gap-2 font-medium transition-all shadow hover:shadow-lg",
                                        whileHover: {
                                            scale: 1.1,
                                            rotate: 1
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                className: "text-2xl",
                                                children: emoji
                                            }, void 0, false, {
                                                fileName: "[project]/components/Navbar.js",
                                                lineNumber: 160,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                children: role
                                            }, void 0, false, {
                                                fileName: "[project]/components/Navbar.js",
                                                lineNumber: 161,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, role, true, {
                                        fileName: "[project]/components/Navbar.js",
                                        lineNumber: 154,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.js",
                                lineNumber: 152,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Navbar.js",
                        lineNumber: 135,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Navbar.js",
                    lineNumber: 129,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Navbar.js",
                lineNumber: 127,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/components/Hero.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/framer-motion [external] (framer-motion, esm_import)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__
]);
([__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
;
;
const Hero = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
        className: "relative h-screen bg-gradient-to-b from-yellow-50 to-white overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__["motion"].div, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                transition: {
                    duration: 1
                },
                className: "absolute inset-0 flex items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-6 md:px-12 lg:px-24",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-10 items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__["motion"].div, {
                                initial: {
                                    y: 100,
                                    opacity: 0
                                },
                                animate: {
                                    y: 0,
                                    opacity: 1
                                },
                                transition: {
                                    delay: 0.5,
                                    duration: 1
                                },
                                className: "text-center md:text-left",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                                        className: "text-4xl md:text-6xl font-bold text-yellow-800 leading-tight mb-4",
                                        children: "DAV Public School"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Hero.js",
                                        lineNumber: 22,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                        className: "text-xl md:text-2xl text-gray-700 mb-8",
                                        children: "Empowering Education Since 1886"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Hero.js",
                                        lineNumber: 25,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                        className: "text-lg text-gray-600 mb-10 max-w-xl",
                                        children: "Committed to excellence, moral values, and all-round development of every child."
                                    }, void 0, false, {
                                        fileName: "[project]/components/Hero.js",
                                        lineNumber: 28,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col md:flex-row items-center gap-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__["motion"].button, {
                                            whileHover: {
                                                scale: 1.05
                                            },
                                            whileTap: {
                                                scale: 0.95
                                            },
                                            className: "bg-yellow-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-700 transition",
                                            children: "Explore Programs"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Hero.js",
                                            lineNumber: 34,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Hero.js",
                                        lineNumber: 33,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Hero.js",
                                lineNumber: 16,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__["motion"].img, {
                                src: "/dav.svg",
                                alt: "DAV Public School",
                                initial: {
                                    scale: 0.8,
                                    opacity: 0
                                },
                                animate: {
                                    scale: 1,
                                    opacity: 1
                                },
                                transition: {
                                    delay: 1,
                                    duration: 1
                                },
                                className: "w-full max-w-md mx-auto md:mx-0"
                            }, void 0, false, {
                                fileName: "[project]/components/Hero.js",
                                lineNumber: 46,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Hero.js",
                        lineNumber: 14,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Hero.js",
                    lineNumber: 13,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Hero.js",
                lineNumber: 7,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"
            }, void 0, false, {
                fileName: "[project]/components/Hero.js",
                lineNumber: 59,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Hero.js",
        lineNumber: 6,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Hero;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/components/Updates.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/framer-motion [external] (framer-motion, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__
]);
([__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
;
;
;
const updatesData = {
    news: [
        {
            id: 1,
            title: "Annual Exhibition",
            description: "Showcasing innovative projects and creative achievements.",
            date: "2025-06-01",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["FaBullhorn"], {
                className: "text-blue-500"
            }, void 0, false, {
                fileName: "[project]/components/Updates.js",
                lineNumber: 12,
                columnNumber: 13
            }, this)
        },
        {
            id: 2,
            title: "Cultural Festival",
            description: "Celebrating diversity through art, music, and dance.",
            date: "2025-07-15",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["FaUsers"], {
                className: "text-green-500"
            }, void 0, false, {
                fileName: "[project]/components/Updates.js",
                lineNumber: 19,
                columnNumber: 13
            }, this)
        }
    ],
    events: [
        {
            id: 1,
            title: "Parent-Teacher Meeting",
            description: "Join us for our monthly progress discussion.",
            date: "2025-06-20",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["FaCalendarAlt"], {
                className: "text-yellow-500"
            }, void 0, false, {
                fileName: "[project]/components/Updates.js",
                lineNumber: 28,
                columnNumber: 13
            }, this)
        },
        {
            id: 2,
            title: "Sports Day",
            description: "Annual sports competition and athletic showcase.",
            date: "2025-08-05",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["FaRunning"], {
                className: "text-red-500"
            }, void 0, false, {
                fileName: "[project]/components/Updates.js",
                lineNumber: 35,
                columnNumber: 13
            }, this)
        }
    ]
};
const Updates = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
        className: "py-32 bg-gradient-to-b from-blue-50 to-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 max-w-6xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: -20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: 1
                    },
                    className: "mb-20 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                            className: "text-5xl font-extrabold text-blue-900 tracking-tight mb-3",
                            children: "Latest Updates"
                        }, void 0, false, {
                            fileName: "[project]/components/Updates.js",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                            className: "text-xl text-gray-700 max-w-2xl mx-auto",
                            children: "Stay informed about our school activities and events at DAV Public School."
                        }, void 0, false, {
                            fileName: "[project]/components/Updates.js",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Updates.js",
                    lineNumber: 44,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-2 gap-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__["motion"].div, {
                            initial: {
                                y: 50,
                                opacity: 0
                            },
                            whileInView: {
                                y: 0,
                                opacity: 1
                            },
                            transition: {
                                duration: 0.8
                            },
                            viewport: {
                                once: true
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                    className: "text-3xl font-bold text-blue-800 mb-8 border-b-2 border-blue-300 pb-2",
                                    children: "News"
                                }, void 0, false, {
                                    fileName: "[project]/components/Updates.js",
                                    lineNumber: 67,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "space-y-8",
                                    children: updatesData.news.map(({ id, title, description, date, icon })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__["motion"].div, {
                                            whileHover: {
                                                x: 15,
                                                scale: 1.03
                                            },
                                            className: "p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex gap-4 items-start border-l-4 border-blue-500",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "text-3xl",
                                                    children: icon
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Updates.js",
                                                    lineNumber: 78,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h4", {
                                                            className: "text-xl font-semibold text-blue-700 mb-1",
                                                            children: title
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Updates.js",
                                                            lineNumber: 80,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-600 mb-2",
                                                            children: description
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Updates.js",
                                                            lineNumber: 83,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("time", {
                                                            className: "text-sm text-gray-400 italic"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Updates.js",
                                                            lineNumber: 84,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/Updates.js",
                                                    lineNumber: 79,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, id, true, {
                                            fileName: "[project]/components/Updates.js",
                                            lineNumber: 73,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/Updates.js",
                                    lineNumber: 71,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Updates.js",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__["motion"].div, {
                            initial: {
                                y: 50,
                                opacity: 0
                            },
                            whileInView: {
                                y: 0,
                                opacity: 1
                            },
                            transition: {
                                duration: 0.8,
                                delay: 0.2
                            },
                            viewport: {
                                once: true
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                    className: "text-3xl font-bold text-blue-800 mb-8 border-b-2 border-green-300 pb-2",
                                    children: "Upcoming Events"
                                }, void 0, false, {
                                    fileName: "[project]/components/Updates.js",
                                    lineNumber: 100,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "space-y-8",
                                    children: updatesData.events.map(({ id, title, description, date, icon })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__["motion"].div, {
                                            whileHover: {
                                                x: 15,
                                                scale: 1.03
                                            },
                                            className: "p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex gap-4 items-start border-l-4 border-green-500",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "text-3xl",
                                                    children: icon
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Updates.js",
                                                    lineNumber: 111,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h4", {
                                                            className: "text-xl font-semibold text-green-700 mb-1",
                                                            children: title
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Updates.js",
                                                            lineNumber: 113,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-600 mb-2",
                                                            children: description
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Updates.js",
                                                            lineNumber: 116,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("time", {
                                                            className: "text-sm text-gray-400 italic"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Updates.js",
                                                            lineNumber: 117,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/Updates.js",
                                                    lineNumber: 112,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, id, true, {
                                            fileName: "[project]/components/Updates.js",
                                            lineNumber: 106,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/Updates.js",
                                    lineNumber: 104,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Updates.js",
                            lineNumber: 94,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Updates.js",
                    lineNumber: 59,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Updates.js",
            lineNumber: 43,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Updates.js",
        lineNumber: 42,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Updates;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/styled-jsx/style.js [external] (styled-jsx/style.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("styled-jsx/style.js", () => require("styled-jsx/style.js"));

module.exports = mod;
}}),
"[project]/components/PrincipalCard.jsx [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/styled-jsx/style.js [external] (styled-jsx/style.js, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [ssr] (ecmascript)");
;
;
;
;
const PrincipalCard = ()=>{
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const handleImageClick = ()=>setIsModalOpen(true);
    const closeModal = ()=>setIsModalOpen(false);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        setTimeout(()=>setIsVisible(true), 150);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
        className: "jsx-7c1b4161b3131eb4" + " " + "relative py-20 bg-gradient-to-b from-blue-100 to-white overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "jsx-7c1b4161b3131eb4" + " " + "absolute top-10 left-10 w-32 h-32 bg-blue-300 rounded-full opacity-30 blur-3xl animate-pulse"
            }, void 0, false, {
                fileName: "[project]/components/PrincipalCard.jsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "jsx-7c1b4161b3131eb4" + " " + "absolute bottom-10 right-10 w-40 h-40 bg-blue-400 rounded-full opacity-20 blur-3xl animate-pulse animation-delay-2000"
            }, void 0, false, {
                fileName: "[project]/components/PrincipalCard.jsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "jsx-7c1b4161b3131eb4" + " " + `max-w-4xl mx-auto px-6 transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "jsx-7c1b4161b3131eb4" + " " + "bg-white rounded-3xl shadow-2xl p-10 md:flex md:items-center gap-10 group hover:shadow-blue-500/30 transition-shadow duration-500",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "jsx-7c1b4161b3131eb4" + " " + "relative flex-shrink-0 mb-8 md:mb-0 cursor-pointer",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "jsx-7c1b4161b3131eb4" + " " + "rounded-full border-8 border-blue-500 p-1 shadow-lg hover:shadow-xl transition-shadow duration-400 transform hover:scale-110",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/images/pr.jpg",
                                        alt: "Principal CHHOTAN MAHTO",
                                        width: 160,
                                        height: 160,
                                        className: "rounded-full object-cover",
                                        onClick: handleImageClick,
                                        priority: true
                                    }, void 0, false, {
                                        fileName: "[project]/components/PrincipalCard.jsx",
                                        lineNumber: 30,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        className: "jsx-7c1b4161b3131eb4" + " " + "absolute inset-0 rounded-full border-4 border-blue-400 opacity-70 animate-pulse pointer-events-none"
                                    }, void 0, false, {
                                        fileName: "[project]/components/PrincipalCard.jsx",
                                        lineNumber: 40,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PrincipalCard.jsx",
                                lineNumber: 29,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/PrincipalCard.jsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "jsx-7c1b4161b3131eb4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                    className: "jsx-7c1b4161b3131eb4" + " " + "text-4xl md:text-5xl font-extrabold text-blue-900 relative inline-block mb-3 cursor-default group-hover:text-blue-700 transition-colors duration-300",
                                    children: [
                                        "RAJ MAHTO",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            className: "jsx-7c1b4161b3131eb4" + " " + "absolute bottom-0 left-0 h-1 bg-blue-400 rounded-full transition-all duration-500 group-hover:w-full w-20"
                                        }, void 0, false, {
                                            fileName: "[project]/components/PrincipalCard.jsx",
                                            lineNumber: 48,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/PrincipalCard.jsx",
                                    lineNumber: 46,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                    className: "jsx-7c1b4161b3131eb4" + " " + "text-xl text-blue-700 font-semibold italic mb-6 tracking-wide",
                                    children: "Principal, DAV Public School"
                                }, void 0, false, {
                                    fileName: "[project]/components/PrincipalCard.jsx",
                                    lineNumber: 50,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                    className: "jsx-7c1b4161b3131eb4" + " " + "text-gray-800 text-lg max-w-xl leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity duration-400",
                                    children: "With over 10 years of dedicated service, Principal RAJ MAHTO leads DAV Public School with a vision to cultivate excellence, integrity, and innovation. His focus is on shaping future leaders who excel academically and grow with strong values."
                                }, void 0, false, {
                                    fileName: "[project]/components/PrincipalCard.jsx",
                                    lineNumber: 53,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/PrincipalCard.jsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/PrincipalCard.jsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/PrincipalCard.jsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            isModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                onClick: closeModal,
                className: "jsx-7c1b4161b3131eb4" + " " + "fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 cursor-pointer",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    onClick: (e)=>e.stopPropagation(),
                    className: "jsx-7c1b4161b3131eb4" + " " + "relative max-w-md max-h-[80vh] animate-zoomIn",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                            src: "/images/pr.jpg",
                            alt: "Principal RAJ MAHTO Full Size",
                            width: 600,
                            height: 600,
                            className: "rounded-3xl object-cover shadow-2xl border-8 border-white",
                            priority: true
                        }, void 0, false, {
                            fileName: "[project]/components/PrincipalCard.jsx",
                            lineNumber: 73,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                            onClick: closeModal,
                            "aria-label": "Close modal",
                            className: "jsx-7c1b4161b3131eb4" + " " + "absolute -top-4 -right-4 text-white text-5xl font-extrabold hover:text-red-600 transition-colors",
                            children: "×"
                        }, void 0, false, {
                            fileName: "[project]/components/PrincipalCard.jsx",
                            lineNumber: 81,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/PrincipalCard.jsx",
                    lineNumber: 69,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/PrincipalCard.jsx",
                lineNumber: 65,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"], {
                id: "7c1b4161b3131eb4",
                children: ".animate-zoomIn.jsx-7c1b4161b3131eb4{animation:.35s forwards zoomIn}@keyframes zoomIn{0%{opacity:0;transform:scale(.7)}60%{opacity:1;transform:scale(1.1)}to{transform:scale(1)}}.animation-delay-2000.jsx-7c1b4161b3131eb4{animation-delay:2s}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/PrincipalCard.jsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = PrincipalCard;
}}),
"[project]/components/TeacherSlider.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
;
;
const teachers = [
    {
        name: "Amit Sharma",
        subject: "Mathematics",
        bio: "Amit Sharma has been teaching Mathematics for over 12 years and is known for his engaging and interactive teaching style.",
        image: "/images/teachers/amit.jpg"
    },
    {
        name: "Neha Verma",
        subject: "Science",
        bio: "Neha specializes in simplifying complex science concepts and has helped many students fall in love with the subject.",
        image: "/images/teachers/neha.jpg"
    },
    {
        name: "Rahul Sinha",
        subject: "English",
        bio: "Rahul has a knack for literature and communication, inspiring students through poetry and storytelling.",
        image: "/images/teachers/rahul.jpg"
    },
    {
        name: "Sunita Das",
        subject: "Social Science",
        bio: "Sunita connects history and civics with real-world events to create thoughtful global citizens.",
        image: "/images/teachers/sunita.jpg"
    },
    {
        name: "Virendra Kumar",
        subject: "Computer Science",
        bio: "Virendra is passionate about technology and programming, making students industry-ready with hands-on projects.",
        image: "/images/teachers/vire.jpg"
    }
];
const TeacherCardSlider = ()=>{
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(0);
    const [isAutoSlide, setIsAutoSlide] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(true);
    const intervalRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    // Go to next teacher
    const nextTeacher = ()=>{
        setCurrentIndex((prev)=>(prev + 1) % teachers.length);
        pauseAutoSlide();
    };
    // Go to previous teacher
    const prevTeacher = ()=>{
        setCurrentIndex((prev)=>(prev - 1 + teachers.length) % teachers.length);
        pauseAutoSlide();
    };
    // Select teacher by dot
    const selectTeacher = (index)=>{
        setCurrentIndex(index);
        pauseAutoSlide();
    };
    // Pause auto sliding
    const pauseAutoSlide = ()=>{
        setIsAutoSlide(false);
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
    };
    // Resume auto sliding
    const resumeAutoSlide = ()=>{
        setIsAutoSlide(true);
    };
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (isAutoSlide) {
            intervalRef.current = setInterval(()=>{
                setCurrentIndex((prev)=>(prev + 1) % teachers.length);
            }, 5000);
        }
        return ()=>{
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [
        isAutoSlide
    ]);
    const teacher = teachers[currentIndex];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
        className: "bg-gradient-to-b from-blue-50 to-white py-16 px-4",
        "aria-label": "Teacher Profiles Slider",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                className: "text-4xl font-extrabold text-center text-blue-900 mb-12 select-none",
                children: "Meet Our Teachers"
            }, void 0, false, {
                fileName: "[project]/components/TeacherSlider.js",
                lineNumber: 90,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                onMouseEnter: pauseAutoSlide,
                onMouseLeave: resumeAutoSlide,
                className: "max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 transition-all duration-700 hover:shadow-3xl cursor-pointer group",
                "aria-live": "polite",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "md:w-1/2 text-left space-y-4 transition-opacity duration-700 opacity-100",
                        style: {
                            minHeight: "180px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                className: "text-3xl font-bold text-blue-800 tracking-wide",
                                children: teacher.subject
                            }, void 0, false, {
                                fileName: "[project]/components/TeacherSlider.js",
                                lineNumber: 106,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                className: "text-gray-700 text-base leading-relaxed",
                                children: teacher.bio
                            }, void 0, false, {
                                fileName: "[project]/components/TeacherSlider.js",
                                lineNumber: 109,
                                columnNumber: 11
                            }, this)
                        ]
                    }, teacher.name, true, {
                        fileName: "[project]/components/TeacherSlider.js",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "md:w-1/2 flex flex-col items-center space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "w-44 h-44 rounded-full overflow-hidden border-4 border-blue-600 shadow-lg transform transition-transform duration-500 group-hover:scale-105",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                                    src: teacher.image,
                                    alt: `${teacher.name}, ${teacher.subject} Teacher`,
                                    className: "w-full h-full object-cover",
                                    loading: "lazy"
                                }, void 0, false, {
                                    fileName: "[project]/components/TeacherSlider.js",
                                    lineNumber: 115,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/TeacherSlider.js",
                                lineNumber: 114,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                className: "mt-2 text-2xl font-semibold text-blue-900 select-text",
                                children: teacher.name
                            }, void 0, false, {
                                fileName: "[project]/components/TeacherSlider.js",
                                lineNumber: 122,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/TeacherSlider.js",
                        lineNumber: 113,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/TeacherSlider.js",
                lineNumber: 94,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "flex justify-center gap-6 mt-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        "aria-label": "Previous Teacher",
                        onClick: prevTeacher,
                        className: "bg-blue-600 text-white px-5 py-3 rounded-full hover:bg-blue-700 shadow-md transition-colors focus:outline-none focus:ring-4 focus:ring-blue-300",
                        children: "← Prev"
                    }, void 0, false, {
                        fileName: "[project]/components/TeacherSlider.js",
                        lineNumber: 130,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        "aria-label": "Next Teacher",
                        onClick: nextTeacher,
                        className: "bg-blue-600 text-white px-5 py-3 rounded-full hover:bg-blue-700 shadow-md transition-colors focus:outline-none focus:ring-4 focus:ring-blue-300",
                        children: "Next →"
                    }, void 0, false, {
                        fileName: "[project]/components/TeacherSlider.js",
                        lineNumber: 137,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/TeacherSlider.js",
                lineNumber: 129,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "flex justify-center space-x-3 mt-8",
                children: teachers.map((_, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        "aria-label": `Select ${teachers[idx].name}`,
                        onClick: ()=>selectTeacher(idx),
                        className: `w-4 h-4 rounded-full transition-all duration-300 ${idx === currentIndex ? "bg-blue-600 scale-125" : "bg-blue-300 hover:bg-blue-500"}`
                    }, idx, false, {
                        fileName: "[project]/components/TeacherSlider.js",
                        lineNumber: 149,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/TeacherSlider.js",
                lineNumber: 147,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/TeacherSlider.js",
        lineNumber: 86,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = TeacherCardSlider;
}}),
"[project]/components/Feature.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$school$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__School$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/school.js [ssr] (ecmascript) <export default as School>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$laptop$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Laptop$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/laptop.js [ssr] (ecmascript) <export default as Laptop>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bus$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bus.js [ssr] (ecmascript) <export default as Bus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2d$check$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpenCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open-check.js [ssr] (ecmascript) <export default as BookOpenCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [ssr] (ecmascript) <export default as Star>");
;
;
;
const features = [
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
            className: "h-8 w-8 text-blue-600"
        }, void 0, false, {
            fileName: "[project]/components/Feature.js",
            lineNumber: 6,
            columnNumber: 11
        }, this),
        title: 'Experienced Faculty',
        description: 'Our teachers bring decades of academic excellence and innovative teaching methods.'
    },
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
            className: "h-8 w-8 text-yellow-500"
        }, void 0, false, {
            fileName: "[project]/components/Feature.js",
            lineNumber: 11,
            columnNumber: 11
        }, this),
        title: 'Outstanding Results',
        description: 'Consistently achieving top board results with student-centric mentorship.'
    },
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$laptop$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Laptop$3e$__["Laptop"], {
            className: "h-8 w-8 text-green-600"
        }, void 0, false, {
            fileName: "[project]/components/Feature.js",
            lineNumber: 16,
            columnNumber: 11
        }, this),
        title: 'Smart Classrooms',
        description: 'Equipped with digital tools to enhance interactive and visual learning.'
    },
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2d$check$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpenCheck$3e$__["BookOpenCheck"], {
            className: "h-8 w-8 text-purple-600"
        }, void 0, false, {
            fileName: "[project]/components/Feature.js",
            lineNumber: 21,
            columnNumber: 11
        }, this),
        title: 'Personalized Learning',
        description: 'We tailor learning experiences to match each student’s pace and strengths.'
    },
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bus$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bus$3e$__["Bus"], {
            className: "h-8 w-8 text-orange-500"
        }, void 0, false, {
            fileName: "[project]/components/Feature.js",
            lineNumber: 26,
            columnNumber: 11
        }, this),
        title: 'Safe Transport',
        description: 'GPS-enabled buses and responsible staff ensure safety and punctuality.'
    },
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$school$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__School$3e$__["School"], {
            className: "h-8 w-8 text-pink-600"
        }, void 0, false, {
            fileName: "[project]/components/Feature.js",
            lineNumber: 31,
            columnNumber: 11
        }, this),
        title: 'Holistic Development',
        description: 'Sports, arts, and activities build confidence and leadership skills.'
    }
];
const FeatureSection = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
        className: "py-20 bg-gradient-to-b from-white to-blue-50 px-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                    className: "text-4xl font-bold text-blue-900 mb-6",
                    children: "Why Choose Our School?"
                }, void 0, false, {
                    fileName: "[project]/components/Feature.js",
                    lineNumber: 41,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                    className: "text-lg text-gray-600 mb-12 max-w-2xl mx-auto",
                    children: "We believe in nurturing not just academic excellence but also confident, ethical, and well-rounded individuals."
                }, void 0, false, {
                    fileName: "[project]/components/Feature.js",
                    lineNumber: 42,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "grid gap-8 md:grid-cols-2 lg:grid-cols-3",
                    children: features.map((feature, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "bg-white shadow-xl rounded-2xl p-6 text-left hover:scale-[1.02] transition-transform duration-300 border-t-4 border-blue-100 hover:border-blue-500",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "mb-4",
                                    children: feature.icon
                                }, void 0, false, {
                                    fileName: "[project]/components/Feature.js",
                                    lineNumber: 52,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-semibold text-blue-800 mb-2",
                                    children: feature.title
                                }, void 0, false, {
                                    fileName: "[project]/components/Feature.js",
                                    lineNumber: 53,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600 text-sm leading-relaxed",
                                    children: feature.description
                                }, void 0, false, {
                                    fileName: "[project]/components/Feature.js",
                                    lineNumber: 56,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/components/Feature.js",
                            lineNumber: 48,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/Feature.js",
                    lineNumber: 46,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Feature.js",
            lineNumber: 40,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Feature.js",
        lineNumber: 39,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = FeatureSection;
}}),
"[project]/pages/index.js [ssr] (ecmascript)": (() => {{

throw new Error("An error occurred while generating the chunk item [project]/pages/index.js [ssr] (ecmascript)\n\nCaused by:\n- CJS module can't be async.\n\nDebug info:\n- An error occurred while generating the chunk item [project]/pages/index.js [ssr] (ecmascript)\n- Execution of EcmascriptChunkItemContent::new failed\n- CJS module can't be async.");

}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__41ab8fe7._.js.map