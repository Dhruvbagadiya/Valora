// import { MarkdownRenderBox } from "@/components/layout/md-editor/render-md";
// import { Button } from "@/components/ui/button";
// import {
//     Dialog,
//     DialogBody,
//     DialogClose,
//     DialogContent,
//     DialogFooter,
//     DialogHeader,
//     DialogTitle,
//     DialogTrigger,
// } from "@/components/ui/dialog";
// import { FormErrorMessage } from "@/components/ui/form-message";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Switch } from "@/components/ui/switch";
// import { Textarea } from "@/components/ui/textarea";
// import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
// import { cn } from "@/lib/utils";
// import { isValidUrl } from "@shared/lib/utils";
// import {
//     BoldIcon,
//     CodeIcon,
//     Heading1Icon,
//     Heading2Icon,
//     Heading3Icon,
//     ImageIcon,
//     InfoIcon,
//     ItalicIcon,
//     LinkIcon,
//     ListIcon,
//     ListOrderedIcon,
//     PlusIcon,
//     ScanEyeIcon,
//     StrikethroughIcon,
//     TextQuoteIcon,
//     UnderlineIcon,
//     VideoIcon,
//     XIcon,
// } from "lucide-react";
// import type React from "react";
// import { useEffect, useRef, useState } from "react";
// import "./highlightjs.css";

// const IconButton = ({
//     children,
//     tooltipContent,
//     disabled,
//     onClick,
//     ...props
// }: {
//     children: React.ReactNode;
//     tooltipContent?: React.ReactNode;
//     disabled?: boolean;
//     onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void | Promise<void>;
// }) => {
//     return (
//         <Tooltip>
//             <TooltipTrigger asChild>
//                 <Button
//                     size={"icon"}
//                     type="button"
//                     variant={"secondary"}
//                     tabIndex={disabled ? -1 : 0}
//                     disabled={disabled}
//                     className="h-8 w-8 text-muted-foreground"
//                     onClick={onClick}
//                     {...props}
//                 >
//                     {children}
//                 </Button>
//             </TooltipTrigger>
//             <TooltipContent>{tooltipContent}</TooltipContent>
//         </Tooltip>
//     );
// };

// const Separator = () => {
//     return <span className="hidden h-10 w-[0.1rem] bg-shallow-background lg:flex" />;
// };

// const BtnGroup = ({ children }: { children: React.ReactNode }) => {
//     return <div className="flex items-center justify-center gap-x-1.5 gap-y-0.5">{children}</div>;
// };

// // biome-ignore lint/suspicious/noExplicitAny: <explanation>vscode
// function setCursorPosition(textarea: any, position: number[]) {
//     try {
//         if (textarea.setSelectionRange) {
//             textarea.focus();
//             textarea.setSelectionRange(position[0], position[1]);
//         } else if (textarea.createTextRange) {
//             const range = textarea.createTextRange();
//             range.collapse(true);
//             range.moveEnd("character", position[0]);
//             range.moveStart("character", position[1]);
//             range.select();
//         }
//     } catch (error) {
//         console.error(error);
//     }
// }

// function getTextareaSelectedText(textarea: HTMLTextAreaElement) {
//     const selectionStart = textarea.selectionStart;
//     const selectionEnd = textarea.selectionEnd;

//     return textarea.value.slice(selectionStart, selectionEnd) || "";
// }

// const getYoutubeIframe = (url: string, _altText: string, _isPreview = false) => {
//     const youtubeRegex =
//         /^(?:https?:)?(?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9_-]{7,15})(?:[?&][a-zA-Z0-9_-]+=[a-zA-Z0-9_-]+)*$/;
//     const match = youtubeRegex.exec(url);
//     if (match) {
//         return `<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/${match[1]}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>${textSeparatorChar}`;
//     }
//     return "";
// };

// type Props = {
//     editorValue: string;
//     setEditorValue: (value: string) => void;
//     placeholder?: string;
//     textAreaClassName?: string;
// };

// const textSeparatorChar = "{|}";

// const MarkdownEditor = ({ editorValue, setEditorValue, placeholder, textAreaClassName }: Props) => {
//     const [previewOn, setPreviewOn] = useState(false);
//     const editorTextarea = useRef<HTMLTextAreaElement>(null);
//     const [lastSelectionRange, setLastSelectionRange] = useState<number[] | null>();
//     const [wordWrap, setWordWrap] = useState(false);
//     const [keyboardShortcutsModalOpen, setKeyboardShortcutsModalOpen] = useState(false);

//     const toggleTextAtCursorsLine = (
//         text: string,
//         atLineStart?: boolean,
//         actionType?: "ADD_FRAGMENT" | "DELETE_FRAGMENT" | "",
//         replaceSelectedText: string | null = null,
//     ) => {
//         if (editorTextarea.current?.selectionStart === undefined) return;
//         // selectionStart and selectionEnd index, if nothing's selected both will be the same
//         const selectionStart = editorTextarea.current.selectionStart;
//         const selectionEnd = editorTextarea.current.selectionEnd;

//         // If the text has to be added at the line start of around the selection
//         if (atLineStart === true) {
//             const firstSelectedLineIndex = editorValue.slice(0, selectionStart).lastIndexOf("\n") + 1; // Start index of the first selected line
//             const linesBeforeSelection = editorValue.slice(0, firstSelectedLineIndex); // All the other ines before first selected line
//             const textAfterSelection = editorValue.slice(selectionEnd); // All the other text after selection
//             const selectedLines = `${editorValue.slice(firstSelectedLineIndex, selectionEnd)}`.split("\n"); // All of the selected lines

//             let action: "ADD_FRAGMENT" | "DELETE_FRAGMENT" | "" = actionType || "";
//             if (!action) {
//                 // If the first line starts with that text regardless of the other lines, this will be a delete action
//                 if (selectedLines[0].startsWith(text)) action = "DELETE_FRAGMENT";
//                 else action = "ADD_FRAGMENT";
//             }

//             let newSelectedLinesText = "";
//             if (action === "ADD_FRAGMENT") {
//                 // Loop through each line and add the text at the start of each, then add them up
//                 for (const line of selectedLines) {
//                     newSelectedLinesText = `${newSelectedLinesText}${text}${line}\n`;
//                 }

//                 setLastSelectionRange([selectionStart + text.length, selectionEnd + text.length * selectedLines.length]);
//             } else if (action === "DELETE_FRAGMENT") {
//                 // Same way, loop through each line, but check if the text is at the line start before removing anything
//                 let charactersDeletedCount = 0;
//                 for (const line of selectedLines) {
//                     if (line.startsWith(text)) {
//                         charactersDeletedCount += text.length;
//                         newSelectedLinesText += `${line.slice(text.length)}\n`;
//                     } else {
//                         newSelectedLinesText += `${line}\n`;
//                     }
//                 }

//                 // If the selection is upto the first character of that line, make sure not to decrease the startIndex
//                 if (editorValue[selectionStart - 1] === "\n" || selectionStart === 0) {
//                     setLastSelectionRange([selectionStart, selectionEnd - charactersDeletedCount]);
//                 } else {
//                     setLastSelectionRange([selectionStart - text.length, selectionEnd - charactersDeletedCount]);
//                 }
//             }
//             setEditorValue(`${linesBeforeSelection}${newSelectedLinesText.slice(0, -1)}${textAfterSelection}`);
//         } else {
//             const textFragments = text.split(textSeparatorChar);
//             const editorValueFragments = [
//                 editorValue.slice(0, selectionStart),
//                 editorValue.slice(selectionStart, selectionEnd),
//                 editorValue.slice(selectionEnd),
//             ];

//             let newText = editorValue;
//             if (editorValueFragments[0].endsWith(textFragments[0]) && editorValueFragments[2].startsWith(textFragments[1])) {
//                 newText = `${editorValue.slice(0, selectionStart - textFragments[0].length)}${editorValueFragments[1] ? editorValueFragments[1] : ""}${editorValue.slice(selectionEnd + textFragments[1].length)}`;
//                 setLastSelectionRange([selectionStart - textFragments[0].length, selectionEnd - textFragments[0].length]);
//             } else {
//                 newText = `${editorValue.slice(0, selectionStart)}${textFragments[0]}${replaceSelectedText ? replaceSelectedText : editorValueFragments[1] ? editorValueFragments[1] : ""}${textFragments[1]}${editorValue.slice(selectionEnd)}`;

//                 if (replaceSelectedText !== null) {
//                     setLastSelectionRange([
//                         selectionStart + textFragments[0].length,
//                         selectionEnd - editorValueFragments[1].length + replaceSelectedText.length + textFragments[0].length,
//                     ]);
//                 } else {
//                     setLastSelectionRange([selectionStart + textFragments[0].length, selectionEnd + textFragments[0].length]);
//                 }
//             }

//             setEditorValue(newText);
//         }

//         editorTextarea.current.focus();
//     };

//     const Bold = () => {
//         toggleTextAtCursorsLine(`**${textSeparatorChar}**`);
//     };
//     const Italic = () => {
//         toggleTextAtCursorsLine(`_${textSeparatorChar}_`);
//     };
//     const Underline = () => {
//         toggleTextAtCursorsLine(`<u>${textSeparatorChar}</u>`);
//     };
//     const UnorderedList = () => {
//         toggleTextAtCursorsLine("- ", true);
//     };
//     const Quote = () => {
//         toggleTextAtCursorsLine("> ", true);
//     };
//     const CodeBlock = () => {
//         toggleTextAtCursorsLine(`\`\`\`\n${textSeparatorChar}\n\`\`\``);
//     };
//     const Spoiler = () => {
//         toggleTextAtCursorsLine(`<details>\n<summary>Spoiler</summary>\n\n${textSeparatorChar}\n\n</details>`);
//     };

//     // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
//     useEffect(() => {
//         if (lastSelectionRange?.length) {
//             setCursorPosition(editorTextarea.current, lastSelectionRange);
//             setLastSelectionRange(null);
//         }
//     }, [editorValue]);

//     // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
//     useEffect(() => {
//         let blockKeydownEvent = false;
//         const handler = (e: KeyboardEvent) => {
//             if (e.key === "/" && e.ctrlKey) {
//                 e.preventDefault();

//                 if (blockKeydownEvent === true) return;
//                 blockKeydownEvent = true;
//                 setKeyboardShortcutsModalOpen(!keyboardShortcutsModalOpen);
//             }
//         };

//         const resetKeyDownEventBlocking = () => {
//             blockKeydownEvent = false;
//         };

//         document.addEventListener("keydown", handler);
//         document.addEventListener("keyup", resetKeyDownEventBlocking);
//         () => {
//             document.removeEventListener("keydown", handler);
//             document.removeEventListener("keyup", resetKeyDownEventBlocking);
//         };
//     }, []);

//     return (
//         <TooltipProvider>
//             <div className="flex w-full flex-col items-start justify-center gap-1">
//                 {/* TOOLBAR */}
//                 <div className="flex w-full flex-wrap items-center justify-between gap-x-6 gap-y-1">
//                     <div className="flex flex-wrap items-center justify-start gap-x-2 gap-y-1">
//                         <BtnGroup>
//                             <IconButton
//                                 tooltipContent={"Heading 1"}
//                                 disabled={previewOn}
//                                 onClick={() => {
//                                     toggleTextAtCursorsLine("# ", true);
//                                 }}
//                             >
//                                 <Heading1Icon className="h-5 w-5" />
//                             </IconButton>
//                             <IconButton
//                                 tooltipContent={"Heading 2"}
//                                 disabled={previewOn}
//                                 onClick={() => {
//                                     toggleTextAtCursorsLine("## ", true);
//                                 }}
//                             >
//                                 <Heading2Icon className="h-5 w-5" />
//                             </IconButton>
//                             <IconButton
//                                 tooltipContent={"Heading 3"}
//                                 disabled={previewOn}
//                                 onClick={() => {
//                                     toggleTextAtCursorsLine("### ", true);
//                                 }}
//                             >
//                                 <Heading3Icon className="h-5 w-5" />
//                             </IconButton>
//                         </BtnGroup>
//                         <Separator />
//                         <BtnGroup>
//                             <IconButton tooltipContent={"Bold"} disabled={previewOn} onClick={Bold}>
//                                 <BoldIcon className="h-5 w-5" />
//                             </IconButton>
//                             <IconButton tooltipContent={"Italic"} disabled={previewOn} onClick={Italic}>
//                                 <ItalicIcon className="h-5 w-5" />
//                             </IconButton>
//                             <IconButton tooltipContent={"Underline"} disabled={previewOn} onClick={Underline}>
//                                 <UnderlineIcon className="h-5 w-5" />
//                             </IconButton>
//                             <IconButton
//                                 tooltipContent={"Strikethrough"}
//                                 disabled={previewOn}
//                                 onClick={() => {
//                                     toggleTextAtCursorsLine(`~~${textSeparatorChar}~~`);
//                                 }}
//                             >
//                                 <StrikethroughIcon className="h-5 w-5" />
//                             </IconButton>
//                             <IconButton tooltipContent={"Code"} disabled={previewOn} onClick={CodeBlock}>
//                                 <CodeIcon className="h-5 w-5" />
//                             </IconButton>
//                             <IconButton tooltipContent={"Spoiler"} disabled={previewOn} onClick={Spoiler}>
//                                 <ScanEyeIcon className="h-btn-icon w-btn-icon" />
//                             </IconButton>
//                         </BtnGroup>
//                         <Separator />
//                         <BtnGroup>
//                             <IconButton tooltipContent={"Bulleted list"} disabled={previewOn} onClick={UnorderedList}>
//                                 <ListIcon className="h-5 w-5" />
//                             </IconButton>
//                             <IconButton
//                                 tooltipContent={"Numbered list"}
//                                 disabled={previewOn}
//                                 onClick={() => {
//                                     toggleTextAtCursorsLine("1. ", true);
//                                 }}
//                             >
//                                 <ListOrderedIcon className="h-5 w-5" />
//                             </IconButton>
//                             <IconButton tooltipContent={"Quote"} disabled={previewOn} onClick={Quote}>
//                                 <TextQuoteIcon className="h-5 w-5" />
//                             </IconButton>
//                         </BtnGroup>
//                         <Separator />
//                         <BtnGroup>
//                             <LinkInsertionModal
//                                 disabled={previewOn}
//                                 modalTitle="Insert link"
//                                 getMarkdownString={(url: string, altText: string, isPreview?: boolean) => {
//                                     let selectedText = "";
//                                     if (editorTextarea.current) selectedText = getTextareaSelectedText(editorTextarea.current);
//                                     const linkLabel = altText || selectedText || url;
//                                     return `[${isPreview === true ? linkLabel : ""}${textSeparatorChar}](${url})`;
//                                 }}
//                                 insertFragmentFunc={(markdownString: string, url: string, altText: string) => {
//                                     let selectedText = "";
//                                     if (editorTextarea.current) selectedText = getTextareaSelectedText(editorTextarea.current);
//                                     const linkLabel = altText || selectedText || url;
//                                     toggleTextAtCursorsLine(markdownString, false, "ADD_FRAGMENT", linkLabel);
//                                 }}
//                                 altTextInputLabel="Label"
//                                 altTextInputPlaceholder="Enter label..."
//                                 urlInputLabel="URL"
//                                 urlInputPlaceholder="Enter the link's URL..."
//                                 isAltTextRequired={false}
//                                 altTextInputVisible={true}
//                             >
//                                 <IconButton tooltipContent={"Link"} disabled={previewOn}>
//                                     <LinkIcon className="h-4 w-4" />
//                                 </IconButton>
//                             </LinkInsertionModal>

//                             <LinkInsertionModal
//                                 disabled={previewOn}
//                                 modalTitle="Insert image"
//                                 getMarkdownString={(url: string, altText: string, isPreview = false) => {
//                                     let selectedText = "";
//                                     if (editorTextarea.current) selectedText = getTextareaSelectedText(editorTextarea.current);
//                                     const linkLabel = altText || selectedText || url;
//                                     return `![${isPreview ? linkLabel : ""}${textSeparatorChar}](${url})`;
//                                 }}
//                                 insertFragmentFunc={(markdownString: string, url: string, altText: string) => {
//                                     let selectedText = "";
//                                     if (editorTextarea.current) selectedText = getTextareaSelectedText(editorTextarea.current);
//                                     const linkLabel = altText || selectedText || url;
//                                     toggleTextAtCursorsLine(markdownString, false, "ADD_FRAGMENT", linkLabel);
//                                 }}
//                                 altTextInputLabel="Description (alt text)"
//                                 altTextInputPlaceholder="Describe the image..."
//                                 urlInputLabel="URL"
//                                 urlInputPlaceholder="Enter the image URL..."
//                                 isAltTextRequired={false}
//                                 altTextInputVisible={true}
//                             >
//                                 <IconButton tooltipContent={"Image"} disabled={previewOn}>
//                                     <ImageIcon className="h-4 w-4" />
//                                 </IconButton>
//                             </LinkInsertionModal>

//                             <LinkInsertionModal
//                                 disabled={previewOn}
//                                 modalTitle="Insert YouTube video"
//                                 getMarkdownString={getYoutubeIframe}
//                                 insertFragmentFunc={(markdownString: string, _url: string, _altText: string) => {
//                                     toggleTextAtCursorsLine(markdownString, false, "ADD_FRAGMENT");
//                                 }}
//                                 altTextInputLabel=""
//                                 altTextInputPlaceholder=""
//                                 urlInputLabel="YouTube video URL"
//                                 urlInputPlaceholder="Enter YouTube video URL"
//                                 isAltTextRequired={false}
//                                 altTextInputVisible={false}
//                             >
//                                 <IconButton tooltipContent={"Video"} disabled={previewOn}>
//                                     <VideoIcon className="h-5 w-5" />
//                                 </IconButton>
//                             </LinkInsertionModal>
//                         </BtnGroup>
//                     </div>
//                     <div className="flex items-center justify-center gap-2">
//                         <Switch id="markdown-editor-preview-toggle-switch" checked={previewOn} onCheckedChange={setPreviewOn} />
//                         <Label htmlFor="markdown-editor-preview-toggle-switch" className="text-base">
//                             Preview
//                         </Label>
//                     </div>
//                 </div>

//                 <div className="mt-2 flex w-full items-start justify-center gap-2">
//                     {/* Editor area */}
//                     <div className={cn("flex w-full flex-col items-center justify-center gap-2", previewOn === true && "hidden")}>
//                         <Textarea
//                             name="markdown-textarea"
//                             placeholder={placeholder}
//                             className={cn(
//                                 "h-[32rem] min-h-[16rem] w-full resize-y rounded-lg font-mono text-base text-foreground dark:text-foreground focus-within:!bg-background-shallow/10",
//                                 wordWrap === true ? "overflow-x-auto whitespace-nowrap" : "break-words",
//                                 textAreaClassName,
//                             )}
//                             ref={editorTextarea}
//                             value={editorValue}
//                             onChange={(e: any) => {
//                                 setEditorValue(e?.target?.value);
//                             }}
//                             onKeyDown={(e: any) => {
//                                 const pressedKey = e.key.toLowerCase();
//                                 if (pressedKey === "escape") return editorTextarea.current?.blur();

//                                 if (pressedKey === "tab") {
//                                     e.preventDefault();

//                                     if (e.shiftKey === true) {
//                                         toggleTextAtCursorsLine("  ", true, "DELETE_FRAGMENT");
//                                     } else {
//                                         toggleTextAtCursorsLine("  ", true, "ADD_FRAGMENT");
//                                     }
//                                 }

//                                 if (e.shiftKey) return;

//                                 if (e.altKey) {
//                                     e.preventDefault();

//                                     if (pressedKey === "z") setWordWrap((prev) => !prev);
//                                     else if (pressedKey === "b") Bold();
//                                     else if (pressedKey === "i") Italic();
//                                     else if (pressedKey === "u") Underline();
//                                     else if (pressedKey === "c") CodeBlock();
//                                     else if (pressedKey === "s") Spoiler();
//                                     else if (pressedKey === "q") Quote();
//                                     else if (pressedKey === "l") UnorderedList();
//                                 }
//                             }}
//                             spellCheck={false}
//                         />

//                         <div className="w-full flex items-center justify-between flex-wrap gap-x-6 gap-y-2 text-muted-foreground text-sm">
//                             <div className="flex items-center justify-start gap-2">
//                                 <InfoIcon className="w-btn-icon h-btn-icon" />
//                                 <p>
//                                     You can use{" "}
//                                     <a
//                                         rel="noreferrer"
//                                         target="_blank"
//                                         href="https://www.markdownguide.org/basic-syntax/"
//                                         className="link_blue"
//                                     >
//                                         Markdown format
//                                     </a>{" "}
//                                     here.
//                                 </p>
//                             </div>
//                             <KeyboardShortcutsDialog open={keyboardShortcutsModalOpen} setOpen={setKeyboardShortcutsModalOpen}>
//                                 <div className="hidden lg:flex items-center justify-center gap-2 cursor-pointer font-mono">
//                                     <span>Keyboard shortcuts</span>
//                                     <div className="flex items-center justify-center gap-1 font-mono">
//                                         <span className="flex items-center justify-center bg-shallow-background rounded px-1">ctrl</span>
//                                         <span className="flex items-center justify-center bg-shallow-background rounded px-1">/</span>
//                                     </div>
//                                 </div>
//                             </KeyboardShortcutsDialog>
//                         </div>
//                     </div>

//                     {previewOn && (
//                         <div
//                             className={cn(
//                                 "flex w-full overflow-auto items-center justify-center rounded border-2 border-shallow-background p-4",
//                                 !editorValue && "min-h-24",
//                             )}
//                         >
//                             <MarkdownRenderBox text={editorValue} />
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </TooltipProvider>
//     );
// };

// export default MarkdownEditor;

// const EditorModal = ({
//     disabled,
//     title,
//     trigger,
//     children,
//     modalOpen,
//     setModalOpen,
//     insertFragmentFunc,
// }: {
//     disabled: boolean;
//     title: string;
//     modalOpen: boolean;
//     setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
//     trigger: React.ReactNode;
//     children: React.ReactNode;
//     insertFragmentFunc: () => void;
// }) => {
//     return (
//         <Dialog
//             open={modalOpen}
//             onOpenChange={(open: boolean) => {
//                 if (disabled) return;
//                 setModalOpen(open);
//             }}
//         >
//             <DialogTrigger asChild disabled={disabled}>
//                 <div className="flex items-center justify-center">{trigger}</div>
//             </DialogTrigger>
//             <DialogContent>
//                 <DialogHeader>
//                     <DialogTitle>{title}</DialogTitle>
//                 </DialogHeader>

//                 <DialogBody className="flex flex-col gap-form-elements">
//                     {children}

//                     <DialogFooter>
//                         <DialogClose asChild>
//                             <Button className="gap-2" variant={"secondary"} type="button">
//                                 <XIcon className="h-4 w-4" />
//                                 Cancel
//                             </Button>
//                         </DialogClose>

//                         <Button
//                             type="button"
//                             className="gap-2"
//                             onClick={() => {
//                                 insertFragmentFunc();
//                                 setModalOpen(false);
//                             }}
//                         >
//                             <PlusIcon className="w-btn-icon-md h-btn-icon-md" />
//                             Insert
//                         </Button>
//                     </DialogFooter>
//                 </DialogBody>
//             </DialogContent>
//         </Dialog>
//     );
// };

// const LinkInsertionModal = ({
//     modalTitle,
//     disabled,
//     insertFragmentFunc,
//     getMarkdownString,
//     altTextInputLabel,
//     altTextInputPlaceholder,
//     urlInputLabel,
//     urlInputPlaceholder,
//     isAltTextRequired,
//     altTextInputVisible,
//     children,
// }: {
//     modalTitle: string;
//     disabled: boolean;
//     altTextInputLabel: string;
//     altTextInputPlaceholder: string;
//     isAltTextRequired: boolean;
//     altTextInputVisible: boolean;
//     urlInputLabel: string;
//     children: React.ReactNode;
//     urlInputPlaceholder: string;
//     insertFragmentFunc: (markdownString: string, url: string, altText: string) => void;
//     getMarkdownString: (url: string, altText: string, isPreview?: boolean) => string;
// }) => {
//     const [url, setUrl] = useState("");
//     const [urlAltText, setUrlAltText] = useState("");
//     const [modalOpen, setModalOpen] = useState(false);
//     const [urlValidationError, setUrlValidationError] = useState<string | null>(null);

//     useEffect(() => {
//         if (modalOpen === false) {
//             setUrl("");
//             setUrlAltText("");
//         }
//     }, [modalOpen]);

//     useEffect(() => {
//         try {
//             if (isValidUrl(cleanUrl(url))) setUrlValidationError(null);
//             else setUrlValidationError("Invlid URL");
//         } catch (error) {
//             // @ts-ignore
//             setUrlValidationError((error?.message as string) || "");
//         }
//     }, [url]);

//     return (
//         <EditorModal
//             modalOpen={modalOpen}
//             disabled={disabled}
//             setModalOpen={setModalOpen}
//             title={modalTitle}
//             insertFragmentFunc={() => {
//                 if (!url || urlValidationError) return;
//                 if (isAltTextRequired && !urlAltText) return;

//                 insertFragmentFunc(getMarkdownString(url, urlAltText, false), url, urlAltText);

//                 setUrl("");
//                 setUrlAltText("");
//             }}
//             trigger={children}
//         >
//             {altTextInputVisible && (
//                 <div className="flex w-full flex-col items-start justify-center gap-1.5">
//                     <Label htmlFor="markdown-editor-link-label-input" className="flex items-center justify-center">
//                         {altTextInputLabel}{" "}
//                         {isAltTextRequired && <span className="flex h-full items-start justify-center text-accent-foreground">*</span>}
//                     </Label>
//                     <Input
//                         type="text"
//                         id="markdown-editor-link-label-input"
//                         value={urlAltText}
//                         onChange={(e: any) => {
//                             setUrlAltText(e.target.value);
//                         }}
//                         placeholder={altTextInputPlaceholder}
//                         className="w-full"
//                     />
//                 </div>
//             )}
//             <div className="flex w-full flex-col items-start justify-center gap-1.5">
//                 <Label htmlFor="markdown-editor-link-url-input" className="flex items-center justify-center">
//                     {urlInputLabel} <span className="flex h-full items-start justify-center text-accent-foreground">*</span>
//                 </Label>
//                 <Input
//                     id="markdown-editor-link-url-input"
//                     spellCheck={false}
//                     type="text"
//                     value={url}
//                     onChange={(e: any) => {
//                         setUrl(e.target.value);
//                     }}
//                     placeholder={urlInputPlaceholder}
//                     className="w-full"
//                 />
//             </div>

//             {url && urlValidationError ? (
//                 <FormErrorMessage text={urlValidationError} />
//             ) : isAltTextRequired && !urlAltText ? (
//                 <FormErrorMessage text={`${altTextInputLabel} is required!`} />
//             ) : null}

//             <div className="flex w-full flex-col items-start justify-center gap-1.5">
//                 <Label>Preview</Label>
//                 <div
//                     tabIndex={-1}
//                     className={cn(
//                         "flex min-h-24 w-full items-start justify-start rounded border-2 border-shallow-background bg-shallow-background/25 px-4 py-3 dark:border",
//                     )}
//                 >
//                     {url && !urlValidationError ? (
//                         <MarkdownRenderBox text={getMarkdownString(url, urlAltText, true).split(textSeparatorChar).join("")} />
//                     ) : null}
//                 </div>
//             </div>
//         </EditorModal>
//     );
// };

// export function cleanUrl(input: string): string {
//     let url: URL;

//     try {
//         url = new URL(input);
//     } catch (e) {
//         throw new Error("Invalid URL. Make sure the URL is well-formed.");
//     }

//     // Check for unsupported protocols
//     if (url.protocol !== "http:" && url.protocol !== "https:") {
//         throw new Error("Unsupported protocol. Use http or https.");
//     }

//     // If the scheme is "http", automatically upgrade it to "https"
//     if (url.protocol === "http:") {
//         url.protocol = "https:";
//     }

//     // Block certain domains for compliance
//     const blockedDomains = ["forgecdn"];
//     if (blockedDomains.some((domain) => url.hostname.includes(domain))) {
//         throw new Error("Invalid URL. This domain is not allowed.");
//     }

//     return url.toString();
// }

// const KeyboardShortcutsDialog = ({
//     open,
//     setOpen,
//     children,
// }: {
//     open: boolean;
//     setOpen: React.Dispatch<React.SetStateAction<boolean>>;
//     children: React.ReactNode;
// }) => {
//     const shortcutsString =
//         "|  Action  |  Shortcut  |\n|---|---|\n|  Bold  | <kbd>alt</kbd> <kbd>b</kbd>  |\n|  Italic  | <kbd>alt</kbd> <kbd>i</kbd>  |\n|  Underline  | <kbd>alt</kbd> <kbd>u</kbd>  |\n|  Code  |  <kbd>alt</kbd> <kbd>c</kbd>  |\n|  Spoiler  |  <kbd>alt</kbd> <kbd>s</kbd>  |\n|  Quote  |  <kbd>alt</kbd> <kbd>q</kbd>  |\n|  Bulleted list  |  <kbd>alt</kbd> <kbd>l</kbd>  |\n|  Toggle word wrap  |  <kbd>alt</kbd> <kbd>z</kbd>  |";

//     return (
//         <Dialog open={open} onOpenChange={setOpen}>
//             <DialogTrigger asChild className="flex w-fit items-center justify-start">
//                 {children}
//             </DialogTrigger>

//             <DialogContent>
//                 <DialogHeader>
//                     <DialogTitle>Keyboard shortcuts</DialogTitle>
//                 </DialogHeader>

//                 <DialogBody className="markdown-body flex w-full flex-col items-center justify-center">
//                     <MarkdownRenderBox text={shortcutsString} />
//                 </DialogBody>
//             </DialogContent>
//         </Dialog>
//     );
// };
