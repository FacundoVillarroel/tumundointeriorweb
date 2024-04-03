const formatText = (input) => {
  let paragraphs = input.split("\\").map((para) => {
    let content = para.replace(/\*(.*?)\*/g, "<strong>$1</strong>");
    content = content.replace(
      /#(.*?)#/g,
      '<span style="font-style: italic;">$1</span>'
    );
    content = content.replace(/\n/g, "</p><p>");
    return `<p>${content}</p>`;
  });

  return `<div className="parragraph">${paragraphs.join("")}</div>`;
};

export default formatText;
