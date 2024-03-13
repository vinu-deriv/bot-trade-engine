import TicksService from '../../api/ticks_service';
import Observer from './observer';

export const createScope = () => {
    const observer = new Observer();
    const ticksService = new TicksService();
    const stopped = false;
    return { observer, ticksService, stopped };
};
