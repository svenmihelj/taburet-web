import { extendTheme } from "@chakra-ui/react";

import { Button } from "./comonents/button";
import { Checkbox } from "./comonents/checkbox";
import { Select } from "./comonents/select";
import { Slider } from "./comonents/slider";

const overrides = {
  components: { Button, Checkbox, Select, Slider },
};

export const theme = extendTheme(overrides);
