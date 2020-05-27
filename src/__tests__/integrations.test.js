import React from "react";
import { mount } from "enzyme";
import Root from "Root";
import App from "components/App";
import moxios from "moxios";

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <App />
    </Root>
  );
  moxios.install();
  moxios.stubRequest("https://jsonplaceholder.typicode.com/comments", {
    status: 200,
    response: [{ name: "Fetched #1" }, { name: "Fetched #2" }],
  });
});

afterEach(() => {
  moxios.uninstall();
});

it("can fetch a list of comments and display them", (done) => {
  // find the 'fetchComments' button and click it
  wrapped.find('.fetch-comments').simulate('click');

  // Expect to find a list of comments!
  moxios.wait(() => {
    wrapped.update();

    expect(wrapped.find("li").length).toEqual(2);

    done();
    wrapped.unmount();
  });
});
