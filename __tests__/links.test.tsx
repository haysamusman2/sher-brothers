import { render, screen } from "@testing-library/react";

// Framer Motion mock — strips animation props, renders plain HTML elements
jest.mock("framer-motion", () => {
  const React = require("react");
  const motion = new Proxy(
    {},
    {
      get: (_: unknown, tag: string) =>
        // eslint-disable-next-line react/display-name
        ({ children, animate, initial, whileInView, whileHover, transition, viewport, variants, style, ...rest }: any) =>
          React.createElement(tag, { style, ...rest }, children),
    }
  );
  return {
    motion,
    AnimatePresence: ({ children }: any) => children,
    useReducedMotion: () => false,
    useMotionValue: (v: number) => ({ get: () => v, set: () => {} }),
    useTransform: (_: unknown, fn: (v: number) => string) => fn(0),
    animate: jest.fn(() => ({ stop: jest.fn() })),
    useInView: () => false,
  };
});

jest.mock("next/image", () => ({
  __esModule: true,
  // eslint-disable-next-line @next/next/no-img-element
  default: ({ alt, src, fill, priority, ...rest }: any) => <img alt={alt} src={src} {...rest} />,
}));

import Hero from "@/components/Hero";
import BottomCTA from "@/components/BottomCTA";
import StickyWhatsApp from "@/components/StickyWhatsApp";
import Navbar from "@/components/Navbar";

const WA_HREF = "https://wa.me/923005404055";
const PHONE_HREF = "tel:+923005404055";

describe("WhatsApp and phone links", () => {
  it("Hero: WhatsApp CTA points to correct number", () => {
    render(<Hero />);
    const link = screen.getByRole("link", { name: /chat on whatsapp/i });
    expect(link).toHaveAttribute("href", WA_HREF);
  });

  it("Hero: phone link points to correct number", () => {
    render(<Hero />);
    const link = screen.getByRole("link", { name: /call/i });
    expect(link).toHaveAttribute("href", PHONE_HREF);
  });

  it("Navbar: WhatsApp link points to correct number", () => {
    render(<Navbar />);
    const link = screen.getByRole("link", { name: /book via whatsapp/i });
    expect(link).toHaveAttribute("href", WA_HREF);
  });

  it("BottomCTA: WhatsApp link points to correct number", () => {
    render(<BottomCTA />);
    const link = screen.getByRole("link", { name: /open whatsapp/i });
    expect(link).toHaveAttribute("href", WA_HREF);
  });

  it("StickyWhatsApp: link points to correct number", () => {
    render(<StickyWhatsApp />);
    const link = screen.getByRole("link", { name: /chat on whatsapp/i });
    expect(link).toHaveAttribute("href", WA_HREF);
  });
});
