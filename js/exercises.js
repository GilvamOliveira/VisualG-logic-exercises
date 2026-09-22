(() => {
  const book = document.body.dataset.book,
    storageKey = `meteoro-exercises-${book}`,
    form = document.querySelector("#editor form"),
    dialog = document.querySelector("#editor");
  const letters = (a, b) =>
    Array.from({ length: b.charCodeAt(0) - a.charCodeAt(0) + 1 }, (_, i) =>
      String.fromCharCode(a.charCodeAt(0) + i),
    );
  const initial = () =>
    EXERCISE_CATALOG[book].flatMap((g) =>
      (typeof g.range[0] === "number"
        ? Array.from(
            { length: g.range[1] - g.range[0] + 1 },
            (_, i) => g.range[0] + i,
          )
        : letters(...g.range)
      ).map((n) => {
        const id = `${book}-${g.page}-${n}`;
        return {
          id,
          page: g.page,
          chapter: g.chapter,
          number: String(n),
          title: "",
          prompt: "",
          code: "",
          ...(window.VISUALG_MATCHES[id] || {}),
        };
      }),
    );
  const baseline = initial();
  let exercises =
    JSON.parse(localStorage.getItem(storageKey) || "null") || baseline;
  baseline.forEach((item) => {
    if (!exercises.some((existing) => existing.id === item.id))
      exercises.push(item);
  });
  if (book === "manzano") {
    const chapters = Object.fromEntries(
      baseline.map((item) => [item.page, item.chapter]),
    );
    exercises.forEach((item) => {
      if (chapters[item.page]) item.chapter = chapters[item.page];
    });
  }
  exercises = exercises.map((x) => {
    const match = {
      ...(window.EXERCISE_DETAILS[x.id] || {}),
      ...(window.VISUALG_MATCHES[x.id] || {}),
    };
    return Object.keys(match).length
      ? {
          ...x,
          title: x.title || match.title,
          prompt: x.prompt || match.prompt,
          code: x.code || match.code || "",
        }
      : x;
  });
  const save = () =>
    localStorage.setItem(storageKey, JSON.stringify(exercises));
  const esc = (s) =>
    String(s).replace(
      /[&<>'"]/g,
      (c) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          "'": "&#39;",
          '"': "&quot;",
        })[c],
    );
  const render = () => {
    const groups = Object.values(
      exercises.reduce((r, x) => {
        const k = `${x.page}|${x.chapter}`;
        (r[k] ||= { page: x.page, chapter: x.chapter, items: [] }).items.push(
          x,
        );
        return r;
      }, {}),
    ).sort((a, b) => parseInt(a.page, 10) - parseInt(b.page, 10));
    document.querySelector("#summary").textContent =
      `${exercises.length} exercícios cadastrados · clique em um cartão para abrir e editar.`;
    document.querySelector("#groups").innerHTML = groups
      .map(
        (g) =>
          `<section class="group"><div class="group-title"><span>Página ${esc(g.page)}</span><h2>${esc(g.chapter)}</h2></div><div class="cards">${g.items.map((x) => `<button class="exercise-card" data-id="${esc(x.id)}"><b>${esc(x.number)}</b><span>${esc(x.title || "Exercício " + x.number)}</span><small>${x.code ? "Código VisualG preenchido" : "Abrir para adicionar código"}</small></button>`).join("")}</div></section>`,
      )
      .join("");
  };
  const open = (x) => {
    form.reset();
    Object.entries(
      x || {
        id: "",
        page: "",
        chapter: "",
        number: "",
        title: "",
        prompt: "",
        code: "",
      },
    ).forEach(([k, v]) => {
      if (form.elements[k]) form.elements[k].value = v;
    });
    document.querySelector("#editor-title").textContent = x
      ? `Exercício ${x.number}`
      : "Novo exercício";
    document.querySelector("#remove").hidden = !x;
    dialog.showModal();
  };
  document.querySelector("#groups").addEventListener("click", (e) => {
    const card = e.target.closest(".exercise-card");
    if (card) open(exercises.find((x) => x.id === card.dataset.id));
  });
  document.querySelector(".add").addEventListener("click", () => open());
  form.addEventListener("submit", (e) => {
    if (e.submitter.value !== "save") return;
    e.preventDefault();
    const x = Object.fromEntries(new FormData(form));
    if (!x.id) x.id = `${book}-${Date.now()}`;
    const i = exercises.findIndex((y) => y.id === x.id);
    if (i < 0) exercises.push(x);
    else exercises[i] = x;
    save();
    render();
    dialog.close();
  });
  document.querySelector("#remove").addEventListener("click", () => {
    const id = form.elements.id.value;
    if (id && confirm("Excluir este exercício?")) {
      exercises = exercises.filter((x) => x.id !== id);
      save();
      render();
      dialog.close();
    }
  });
  render();
})();
