import {BaseSource} from "ak-lib-biz/source/BaseSource";
import { ioc } from "ak-lib-sys";
import {dwhBaseSource} from "./../../base/dwhBaseSource";

import  * as dt  from "./../../data/dwh_HostComputer";dt;
@ioc.PlugIn({BaseType:"ISource",RegName:"dwh_HostComputersource",Author:"zhengyukun",Doc:"主机管理的数据源插件"})
export class dwh_HostComputersource   extends  dwhBaseSource {
    Title:string  = "主机管理";
    ModelName:string = "dwh_HostComputer";
    Url: string = "/dwh/data/tables";
}  

