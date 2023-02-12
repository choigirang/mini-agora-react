export function getDescussionData() {
  let url = `http://localhost:4000/discussions`;
  return fetch(url).then((res) => res.json());
}
