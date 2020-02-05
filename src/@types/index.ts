interface IQueryParams {
    root: string;
    args: any;
    context: any; // find a way to get apollo server's context
    info: any;
}
