import { Mongo } from 'meteor/mongo';

export const Counts = new Mongo.Collection('counts');
export const Todos = new Mongo.Collection('todos');
