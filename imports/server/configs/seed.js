import { Meteor } from 'meteor/meteor';
import { Counts } from '../../libs/collections';

export default function() {
  Meteor.startup(() => {
    const count = Counts.findOne({}, {_id: 1});
    if (count) {
      return;
    }
    Counts.insert({count: 1, updatedAt: new Date()});
  });
}
