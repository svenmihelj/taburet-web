import { extendTheme } from "@chakra-ui/react";

import { Button } from "./comonents/button";
import { Checkbox } from "./comonents/checkbox";
import { Select } from "./comonents/select";
import { Slider } from "./comonents/slider";
import { Input } from "./comonents/input";
import { Textarea } from "./comonents/textarea";

const overrides = {
  components: { Button, Checkbox, Select, Slider, Input, Textarea },
};

export const theme = extendTheme(overrides);
