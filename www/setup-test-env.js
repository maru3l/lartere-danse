import { createSerializer } from "@emotion/jest"
import * as emotion from "@emotion/css"

expect.addSnapshotSerializer(createSerializer(emotion))
