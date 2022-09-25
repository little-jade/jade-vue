import { render } from "./renderer";
export function createApp(rootComponent) {
  return {
    component: rootComponent,
    mount(container) {
      render(rootComponent, container);
    }
  }

}