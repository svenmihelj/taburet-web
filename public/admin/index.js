window.CMS.init();

var PostPreview = createClass({
  render: function () {
    // const { entry, getAsset, widgetsFor } = this.props;
    console.log("OVO TU TRAZIM", this.props);
    // const imagePath = entry.getIn(["data", "image"]);
    // const image = getAsset(imagePath);
    return h("div", { className: "container" }, "This is test preview");
  },
});

window.CMS.registerPreviewTemplate("filter-hr", PostPreview);
