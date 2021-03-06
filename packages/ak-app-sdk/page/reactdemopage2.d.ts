/// <reference types="react" />
import { BaseReactPage, BaseDomReact } from "ak-lib-react-web/basereactpage";
import 'antd/dist/antd.css';
import 'ant-design-pro/dist/ant-design-pro.css';
export declare class ReactDemo2PageReact extends BaseDomReact<ReactDemo2Page> {
    render(): JSX.Element;
}
export declare class ReactDemo2Page extends BaseReactPage {
    Title: string;
    $ReactType: any;
    Pro1: string;
    protected loadPage(): void;
}
