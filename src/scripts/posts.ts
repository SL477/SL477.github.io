export function getSlug(id: string) {
  return `${id.split('-')[0]}/${id.split('-')[1]}/${id.split('-')[2]}/${id.substring(11)}`;
}