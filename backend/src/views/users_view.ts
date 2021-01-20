import User from '../models/User';
import orphanagesView from './orphanages_view';

export default {
    render(user: User) {
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            createdAt: user.createdAt,
            orphanages: user.orphanages
        };
    },

    renderMany(users: User[]) {
        return users.map(user => this.render(user));
    }
}