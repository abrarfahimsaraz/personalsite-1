import { createElement, type ReactNode } from "react";

const ALLOWED_TAGS = new Set([
  "p", "h1", "h2", "h3", "h4", "h5", "h6",
  "em", "strong", "a", "ul", "ol", "li",
  "blockquote", "code", "pre", "br", "hr", "span",
]);

const ALLOWED_ATTRS: Record<string, Set<string>> = {
  a: new Set(["href", "target", "rel"]),
};

function domToReact(node: Node, key: number): ReactNode {
  if (node.nodeType === Node.TEXT_NODE) {
    return node.textContent;
  }

  if (node.nodeType !== Node.ELEMENT_NODE) {
    return null;
  }

  const el = node as Element;
  const tag = el.tagName.toLowerCase();

  if (!ALLOWED_TAGS.has(tag)) {
    // Render children of disallowed tags (skip the tag itself)
    return Array.from(node.childNodes).map(domToReact);
  }

  const props: Record<string, unknown> = { key };
  const allowedAttrs = ALLOWED_ATTRS[tag];
  if (allowedAttrs) {
    for (const attr of Array.from(el.attributes)) {
      if (allowedAttrs.has(attr.name)) {
        props[attr.name] = attr.value;
      }
    }
  }

  const children = Array.from(node.childNodes).map(domToReact);
  return createElement(tag, props, ...children);
}

export default function SafeHtml({ html, className }: { html: string; className?: string }) {
  const doc = new DOMParser().parseFromString(html, "text/html");
  const children = Array.from(doc.body.childNodes).map(domToReact);
  return <div className={className}>{children}</div>;
}
