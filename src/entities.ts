const entityMap: { [k: string]: string } = {
  '&quot;': '"',
  '&apos;': "'",
  '&amp;': '&',
  '&lt;': '<',
  '&gt;': '>',
  '&nbsp;': ' ',
  '&ldquo;': '“',
  '&rdquo;': '”',
  '&lsquo;': '‘',
  '&rsquo;': '’',
  '&middot;': '·',
  '&mdash;': '—',
  '&copy;': '©',
  '&reg;': '®',
  '&tradel;': '™',
  '&times;': '×',
  '&divide;': '÷',
};

const reEntity = new RegExp(`(${Object.keys(entityMap).join('|')})`, 'gi');

function entity(str: string) {
  const code = String(str).toLowerCase();
  return entityMap[code] || str;
}

/**
 * 转义实体字符
 * @param str 字符串
 */
export function entities(str: string) {
  return String(str).replace(reEntity, m => entity(m));
}
