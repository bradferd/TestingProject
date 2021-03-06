import React from "react";
import { mount } from "enzyme";
import CommentBox from "components/CommentBox";
import Root from 'Root'

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it("has a text area and a button", () => {
  expect(wrapped.find("textarea").length).toEqual(1);
  expect(wrapped.find("button").length).toEqual(2);
});

describe("the textarea", () => {
  beforeEach(() => {
    expect(
      wrapped.find("textarea").simulate("change", {
        target: { value: "new comment" },
      })
    );
    wrapped.update();
  });

  it("has a text area that users can type in it", () => {
    expect(wrapped.find("textarea").prop("value")).toEqual("new comment");
  });

  it("has a text area, can be submitted and clears upon submit", () => {
    expect(wrapped.find("textarea").prop("value")).toEqual("new comment");

    expect(wrapped.find("form").simulate("submit"));
    wrapped.update();

    expect(wrapped.find("textarea").prop("value")).toEqual("");
  });
});
