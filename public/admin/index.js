window.CMS.init();

var FilterPreview = createClass({
  render: function () {
    const { entry } = this.props;

    return h(
      "div",
      {},
      h(
        "div",
        { className: "sorting" },
        h("div", {}, "Sort by", h("i", { className: "arrow" })),
        h(
          "div",
          { className: "menu" },
          h("div", {}, this.props.entry.getIn(["data", "sort_new"])),
          h("div", {}, this.props.entry.getIn(["data", "sort_name_asc"])),
          h("div", {}, this.props.entry.getIn(["data", "sort_name_desc"])),
          h("div", {}, this.props.entry.getIn(["data", "sort_price_asc"])),
          h("div", {}, this.props.entry.getIn(["data", "sort_price_desc"]))
        )
      ),
      h(
        "div",
        { className: "filtering" },
        h("h1", {}, this.props.entry.getIn(["data", "filter_title"])),
        h(
          "h3",
          {},
          this.props.entry.getIn(["data", "filter_product_type_title"])
        ),
        h(
          "div",
          {},
          h("input", { type: "checkbox", id: "item1" }),
          h("label", { for: "item1" }, "Item 1"),
          h("input", { type: "checkbox", id: "item2" }),
          h("label", { for: "item2" }, "Item 2")
        ),
        h("h3", {}, this.props.entry.getIn(["data", "filter_price_title"])),
        h(
          "div",
          { className: "price-label-container" },
          h(
            "span",
            {},
            this.props.entry.getIn(["data", "filter_price_min_label"])
          ),
          h(
            "span",
            {},
            this.props.entry.getIn(["data", "filter_price_max_label"])
          )
        ),
        h("input", { type: "range" }),
        h(
          "h3",
          {},
          this.props.entry.getIn(["data", "filter_mechanism_type_title"])
        ),
        h(
          "div",
          {},
          h("input", { type: "checkbox", id: "item1" }),
          h("label", { for: "item1" }, "Item 1"),
          h("input", { type: "checkbox", id: "item2" }),
          h("label", { for: "item2" }, "Item 2")
        ),
        h(
          "h3",
          {},
          this.props.entry.getIn(["data", "filter_material_type_title"])
        ),
        h(
          "div",
          {},
          h("input", { type: "checkbox", id: "item1" }),
          h("label", { for: "item1" }, "Item 1"),
          h("input", { type: "checkbox", id: "item2" }),
          h("label", { for: "item2" }, "Item 2")
        ),
        h(
          "button",
          { className: "clear" },
          this.props.entry.getIn(["data", "filter_btn_clear"])
        ),
        h(
          "button",
          { className: "submit" },
          this.props.entry.getIn(["data", "filter_btn_submit"])
        )
      )
    );
  },
});

window.CMS.registerPreviewTemplate("filter-hr", FilterPreview);
window.CMS.registerPreviewTemplate("filter-en", FilterPreview);
window.CMS.registerPreviewTemplate("filter-de", FilterPreview);
window.CMS.registerPreviewTemplate("filter-ru", FilterPreview);
