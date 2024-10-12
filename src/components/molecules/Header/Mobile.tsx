"use client";

import { useState } from "react";
import { Menu, X } from "@geist-ui/icons";
import Link from "next/link";

import styles from "./mobile.module.css";
import settings from "./settings";

export default function Mobile() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  function MenuLink(props: { href: string; children: JSX.Element | string }) {
    return (
      <Link href={props.href} onClick={toggleMenu}>
        {props.children}
      </Link>
    );
  }

  if (isOpen)
    return (
      <div className={styles.openMenu}>
        <button className={styles.button} onClick={toggleMenu}>
          <X />
        </button>
        <ul>
          {settings.map((item) => (
            <li key={item.slug}>
              <MenuLink href={item.slug}>{item.title}</MenuLink>
            </li>
          ))}
        </ul>
      </div>
    );

  return (
    <div className={styles.wrapper}>
      <Link className={styles.logo} href={"/"}>
        abcissa
      </Link>
      <button className={styles.button} onClick={toggleMenu}>
        <Menu />
      </button>
    </div>
  );
}
