export type Vehicle = {id:string;brand:string;model:string;year:string;plate:string;color:string;km:string;primary:boolean};
export type ServiceStatus = 'Pendente'|'Agendado'|'Em andamento'|'Concluído'|'Cancelado';
export type Service = {id:string;vehicleId:string;kind:string;description:string;date:string;status:ServiceStatus;createdAt:string};
export type User = {name:string;email:string;phone:string;password:string};
export type Database = {user:User|null;vehicles:Vehicle[];services:Service[];loggedIn:boolean};
export const initialData:Database={user:null,vehicles:[],services:[],loggedIn:false};
