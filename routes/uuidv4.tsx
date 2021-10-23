/**
 * Generates a unique key for the navigation stack.
 *
 * TODO: Move file to other location. ("utils" directory would be fitting)
 */
export function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    // eslint-disable-next-line no-bitwise
    var r = (Math.random() * 16) | 0,
      v =
        // eslint-disable-next-line eqeqeq
        c == 'x'
          ? r
          : // eslint-disable-next-line no-bitwise
            (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
