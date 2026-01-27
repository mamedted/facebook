//Element selector//
function id(a) {
  return document.getElementById(a);
}

function q(a) {
  return document.querySelector(a);
}

function qa(a) {
  return document.querySelectorAll(a);
}

export function capitalize(a) {
  return a
    .trim()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

function hasCapitalLetter(a) {
  return /[A-Z]/.test(a);
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, Number(ms)));

function hasNumber(a) {
  return /\d/.test(a);
}

function isLongEnough(a, b) {
  return a.length <= b;
}

function create(a) {
  return document.createElement(a);
}

function isMobileDevice() {
  return /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop|BlackBerry/i.test(navigator.userAgent);
}

function getExtension(a) {
  return a.split(".").pop().toLowerCase();
}

function go(a) {
  window.location.href = a;
}

function getAge(a) {
  return new Date().getFullYear() - a.value.slice(0, 4);
}

function show(a) {
  a.style.display = "flex";
}

function hide(a) {
  a.style.display = "none";
}

function greet(name) {
  console.log("Hello" + " " + name);
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function k(a, b) {
  return document.addEventListener("keydown", (e) => {
    if (e.key == a) {
      b();
    }
  });
}

function copypaste(a) {
  navigator.clipboard.writeText(a);
}

function random(a) {
  return Math.trunc(Math.random() * "9".repeat(a));
}

function checkjsonstring(str) {
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
}

function rand(a) {
  if (10 ** a == Aa.length) {
    return "Reach maximum stack";
  }

  b = Math.random()
    .toString()
    .split("")
    .slice(2, a + 2)
    .reverse()
    .join("");

  if (Aa.includes(b)) {
    rand(a);
    return b;
  } else {
    Aa.push(b);
    console.log(Aa);
    return b;
  }
}

function date(a) {
  let today = new Date();

  if (a === "year") {
    return today.getFullYear();
  } else if (a === "month") {
    return today.getMonth();
  } else if (a === "date") {
    return today.getDate();
  } else if (a === "day") {
    return today.getDay();
  } else if (a === "hour") {
    return today.getHours();
  } else if (a === "minute") {
    return today.getMinutes();
  } else if (a === "second") {
    return today.getSeconds();
  }
}

function timeAgo(dateString) {
  const postDate = new Date(dateString);
  const now = new Date();

  const diffMs = now - postDate; // difference in milliseconds
  const diffSec = Math.floor(diffMs / 1000);
  const diffMin = Math.floor(diffSec / 60);
  const diffHr = Math.floor(diffMin / 60);
  const diffDay = Math.floor(diffHr / 24);

  if (diffSec < 60) return "just now";
  if (diffMin < 60) return `${diffMin}m`;
  if (diffHr < 24) return `${diffHr}h`;
  if (diffDay < 7) return `${diffDay}d`;

  // For older posts, show the actual date
  return postDate.toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
  });
}

export async function sendText(url, a) {
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: a,
    });

    if (!res.ok) {
      throw new Error(`status: ${res.status}`);
    }

    const data = await res.json();
    return { success: true, data };
  } catch (err) {
    console.log("Fetch error:", err);
    return { success: false, error: err.message };
  }
}

export async function sendFile(url, a) {
  try {
    const res = await fetch(url, {
      method: "POST",
      credentials: "include",
      body: a,
    });

    if (!res.ok) {
      throw new Error(`status: ${res.status}`);
    }

    const data = await res.json();
    return { success: true, data };
  } catch (err) {
    console.log("Fetch error:", err);
    return { success: false, error: err.message };
  }
}

import { useEffect } from "react";

/**
 * @param {string} targetKey - The key to listen for (e.g., "`" or "Enter")
 * @param {function} callback - The function to run when the key is pressed
 */
export const key = (targetKey, callback) => {
  useEffect(() => {
    const handler = (event) => {
      if (event.key === targetKey) {
        callback(event);
      }
    };

    window.addEventListener("keydown", handler);

    return () => {
      window.removeEventListener("keydown", handler);
    };
  }, [targetKey, callback]); // Re-binds only if key or action changes
};
