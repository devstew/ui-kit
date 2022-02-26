import clsx from "clsx";
import React from "react";
import { createIcon } from "../helpers/icon";

export const EmvImage = createIcon(({ className, ...rest }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="103"
            height="102"
            fill="none"
            viewBox="0 0 103 102"
            className={clsx("h-[102px] w-[103px]", className)}
            {...rest}
        >
            <circle cx="51.5" cy="51" r="51" fill="#F0F2F4" />
            <mask
                id="path-2-outside-1_3545_71298"
                width="27"
                height="25"
                x="28.5"
                y="38.499"
                fill="#000"
                maskUnits="userSpaceOnUse"
            >
                <path fill="#fff" d="M28.5 38.499H55.5V63.499H28.5z" />
                <path
                    fillRule="evenodd"
                    d="M29.5 43.513v1.173h6.888l2.37 2.843h2.646v-8.03H33.6c-2.264 0-4.099 1.798-4.099 4.014zm16.43 7.215h8.2v-5.24h-6.497l-1.702 2.04v3.2zm8.2 6.044h-6.497l-1.702-2.04v-3.198h8.2v5.238zm-11.9 5.99V54.73h2.648l2.368 2.844h6.888v1.17c0 2.22-1.835 4.017-4.099 4.017H42.23zm-4.531-11.228v3.198l-1.702 2.04H29.5v-5.238h8.199zM29.5 45.488h6.497l1.702 2.04v3.2H29.5v-5.24zm15.377 2.04l2.369-2.842h6.888v-1.173c0-2.216-1.835-4.014-4.099-4.014H42.23v8.03H44.877zm-8.49 10.046l2.37-2.844h2.647v8.031H33.6c-2.264 0-4.099-1.798-4.099-4.016v-1.171h6.888z"
                    clipRule="evenodd"
                />
            </mask>
            <path
                fill="#fff"
                fillRule="evenodd"
                d="M29.5 43.513v1.173h6.888l2.37 2.843h2.646v-8.03H33.6c-2.264 0-4.099 1.798-4.099 4.014zm16.43 7.215h8.2v-5.24h-6.497l-1.702 2.04v3.2zm8.2 6.044h-6.497l-1.702-2.04v-3.198h8.2v5.238zm-11.9 5.99V54.73h2.648l2.368 2.844h6.888v1.17c0 2.22-1.835 4.017-4.099 4.017H42.23zm-4.531-11.228v3.198l-1.702 2.04H29.5v-5.238h8.199zM29.5 45.488h6.497l1.702 2.04v3.2H29.5v-5.24zm15.377 2.04l2.369-2.842h6.888v-1.173c0-2.216-1.835-4.014-4.099-4.014H42.23v8.03H44.877zm-8.49 10.046l2.37-2.844h2.647v8.031H33.6c-2.264 0-4.099-1.798-4.099-4.016v-1.171h6.888z"
                clipRule="evenodd"
            />
            <path
                fill="#333743"
                d="M29.5 44.686h-.7v.7h.7v-.7zm6.888 0l.537-.448-.21-.252h-.327v.7zm2.37 2.843l-.538.448.21.252h.327v-.7zm2.646 0v.7h.7v-.7h-.7zm0-8.03h.7v-.7h-.7v.7zm12.727 11.229v.7h.7v-.7h-.7zm-8.2 0h-.7v.7h.7v-.7zm8.2-5.24h.7v-.7h-.7v.7zm-6.498 0v-.7h-.328l-.21.251.538.449zm-1.702 2.04l-.538-.449-.162.195v.254h.7zm1.702 9.244l-.538.449.21.251h.328v-.7zm6.497 0v.7h.7v-.7h-.7zm-8.2-2.04h-.7v.254l.163.195.538-.449zm0-3.198v-.7h-.7v.7h.7zm8.2 0h.7v-.7h-.7v.7zm-11.9 3.196v-.7h-.7v.7h.7zm0 8.031h-.7v.7h.7v-.7zm2.648-8.03l.537-.449-.21-.252h-.328v.7zm2.368 2.843l-.538.448.21.252h.328v-.7zm6.888 0h.7v-.7h-.7v.7zM37.7 54.732l.538.449.162-.195v-.254h-.7zm0-3.198h.7v-.7h-.7v.7zm-1.702 5.238v.7h.327l.21-.251-.537-.449zm-6.497 0h-.7v.7h.7v-.7zm0-5.238v-.7h-.7v.7h.7zm6.497-6.046l.537-.449-.21-.251h-.327v.7zm-6.497 0v-.7h-.7v.7h.7zm8.199 2.04h.7v-.254l-.163-.195-.537.449zm0 3.2v.7h.7v-.7h-.7zm-8.199 0h-.7v.7h.7v-.7zm17.746-6.042v-.7h-.328l-.21.252.538.448zm-2.369 2.843v.7h.328l.21-.252-.538-.448zm9.257-2.843v.7h.7v-.7h-.7zM42.23 39.5v-.7h-.7v.7h.7zm0 8.03h-.7v.7h.7v-.7zm2.475 0v.7-.7zm-5.948 7.201v-.7h-.327l-.21.252.537.448zm-2.37 2.844v.7h.328l.21-.252-.537-.448zm5.017-2.844h.7v-.7h-.7v.7zm0 8.031v.7h.7v-.7h-.7zM29.5 57.573v-.7h-.7v.7h.7zm.7-12.887v-1.173h-1.4v1.173h1.4zm6.188-.7H29.5v1.4h6.888v-1.4zm2.907 3.094l-2.37-2.842-1.075.897 2.37 2.842 1.075-.897zm2.11-.251h-2.648v1.4h2.647v-1.4zm-.7-7.33v8.03h1.4v-8.03h-1.4zm-7.106.7h7.805v-1.4H33.6v1.4zM30.2 43.513c0-1.816 1.508-3.314 3.4-3.314v-1.4c-2.638 0-4.8 2.097-4.8 4.714h1.4zm23.93 6.515h-8.2v1.4h8.2v-1.4zm-.7-4.54v5.24h1.4v-5.24h-1.4zm-5.797.7h6.498v-1.4h-6.498v1.4zm-1.165 1.788l1.702-2.04-1.075-.897-1.702 2.04 1.075.897zm.163 2.752v-3.2h-1.4v3.2h1.4zm1.002 6.744h6.497v-1.4h-6.497v1.4zm-2.24-2.291l1.702 2.04 1.075-.897-1.702-2.04-1.075.897zm-.162-3.647v3.198h1.4v-3.198h-1.4zm8.9-.7h-8.2v1.4h8.2v-1.4zm.7 5.938v-5.238h-1.4v5.238h1.4zM41.53 54.73v8.031h1.4v-8.03h-1.4zm3.347-.7H42.23v1.4h2.648v-1.4zm2.906 3.096l-2.368-2.844-1.075.896 2.368 2.844 1.075-.896zm6.351-.252h-6.888v1.4h6.888v-1.4zm.7 1.87v-1.17h-1.4v1.17h1.4zm-4.799 4.717c2.638 0 4.8-2.098 4.8-4.716h-1.401c0 1.818-1.508 3.316-3.399 3.316v1.4zm-7.805 0h7.805v-1.4H42.23v1.4zm-3.83-8.729v-3.198h-1.401v3.198h1.4zm-1.866 2.489l1.703-2.04-1.076-.898-1.702 2.04 1.075.898zm-7.034.251h6.497v-1.4H29.5v1.4zm-.7-5.938v5.238h1.4v-5.238h-1.4zm8.899-.7H29.5v1.4h8.199v-1.4zm-1.702-6.046H29.5v1.4h6.497v-1.4zm2.24 2.291l-1.703-2.04-1.075.897 1.702 2.04 1.075-.897zm.162 3.649v-3.2H37v3.2h1.4zm-8.899.7h8.199v-1.4H29.5v1.4zm-.7-5.94v5.24h1.4v-5.24h-1.4zm17.908-1.25l-2.368 2.843 1.075.896 2.368-2.843-1.075-.896zm7.426-.252h-6.888v1.4h6.888v-1.4zm-.7-.473v1.173h1.4v-1.173h-1.4zM50.035 40.2c1.892 0 3.4 1.498 3.4 3.314h1.4c0-2.616-2.163-4.714-4.8-4.714v1.4zm-7.805 0h7.805v-1.4H42.23v1.4zm.7 7.33v-8.03h-1.4v8.03h1.4zm1.775-.7H42.23v1.4h2.475v-1.4zm.172 0h-.172v1.4h.172v-1.4zm-6.657 7.453l-2.37 2.843 1.075.897 2.37-2.843-1.075-.897zm3.184-.252h-2.647v1.4h2.647v-1.4zm.7 8.731v-8.03h-1.4v8.03h1.4zm-8.505.7h7.805v-1.4H33.6v1.4zM28.8 58.745c0 2.618 2.162 4.716 4.8 4.716v-1.4c-1.892 0-3.4-1.498-3.4-3.316h-1.4zm0-1.171v1.17h1.4v-1.17h-1.4zm7.588-.7H29.5v1.4h6.888v-1.4z"
                mask="url(#path-2-outside-1_3545_71298)"
            />
            <path
                fill="#F3B53A"
                fillRule="evenodd"
                d="M76.39 45.818c-.538-1.471-1.882-4.028-2.304-4.378-.614-.526-1.804-.42-2.303.175-.5.665-.461.91.383 2.521 1.306 2.382 1.805 4.028 2.074 6.654.345 3.152-.346 6.374-1.958 9.386-.384.7-.73 1.401-.807 1.576-.23.63.346 1.471 1.075 1.681 1.114.315 1.92-.455 3.033-2.872 2.266-4.762 2.496-9.91.807-14.743zm-9.291-1.926c-.5 0-.653.07-1.037.385-.73.63-.73.945.153 2.556 1.997 3.678 1.959 7.285-.076 11.032-.538 1.016-.653 1.331-.615 1.611.115.455.5.91.96 1.086.192.07.576.14.768.105.73-.105 1.075-.455 1.805-1.786 1.266-2.347 1.727-4.063 1.727-6.584 0-2.452-.46-4.378-1.65-6.584-.73-1.436-1.19-1.821-2.035-1.821zm-7.145 4.342c-.23-.7.384-1.576 1.267-1.716.73-.105 1.23.175 1.92 1.12a8.01 8.01 0 010 9.247c-.69.98-1.459 1.33-2.265 1.015-.384-.14-.806-.595-.921-.98-.154-.42-.039-.771.537-1.611.73-1.086.883-1.646.883-3.047 0-1.401-.154-1.962-.883-3.047l-.122-.202c-.195-.322-.384-.634-.415-.779z"
                clipRule="evenodd"
            />
        </svg>
    );
});
