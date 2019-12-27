export function createDivWithId(id) {
  const div = document.createElement("div");
  div.setAttribute("id", id);
  return div;
}

export function createObjectFromFormIds(formEls) {
  return Array.from(formEls)
    .filter(element => element.id)
    .map(({ id, value }) => ({
      [id]: value
    }))
    .reduce((accumulator, data) => ({ ...accumulator, ...data }));
}
