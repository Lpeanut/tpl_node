export default {
  "bloodWidth": 5,
  "bloodHeight": 2,
  "bloodStyles": [
    { "left": 0, "top": 20 },
    { "right": 0, "top": 20 },
    { "left": 20, "top": 0, "height": 5, "width": 2 },
    { "right": 20, "top": 0, "height": 5, "width": 2 }
  ],
  "vnodes": {
    "tagName": "div",
    "className": "container",
    "children": [
      {
        "tagName": "div",
        "className": "effect_area"
      },
      {
        "tagName": "text",
        "content": "这个是effect_area"
      }
    ]
  }
}