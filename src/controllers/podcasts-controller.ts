import { IncomingMessage, ServerResponse } from 'http';
import { serviceListEpisodes } from '../services/list-episodes-service'
import { serviceFilterEpisodes } from '../services/filter-episodes-service';
import { StatusCode } from '../utils/ststus-code';
import { ContentType } from '../utils/content-type';

export const getListEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
    const content = await serviceListEpisodes()

    res.writeHead(StatusCode.OK, { 'content-type': ContentType.JSON })
    res.end(JSON.stringify(content))
}

export const getFilteredEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
    
    const content = await serviceFilterEpisodes(req.url);

    res.writeHead(StatusCode.OK, { 'content-type': ContentType.JSON })
    res.end(JSON.stringify(content))
}