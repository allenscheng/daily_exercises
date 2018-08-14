function whosOnline(friends) {
  var obj = {};
  for (var i = 0; i < friends.length; i++) {
    if (friends[i].status === 'online' && friends[i].lastActivity <= 10) {
      if (obj['online'] === undefined) {
        obj['online'] = [];
        obj['online'].push(friends[i].username);
      } else {
        obj['online'].push(friends[i].username);
      }
    } else if (friends[i].status === 'offline') {
      if (obj['offline'] === undefined) {
        obj['offline'] = []; 
        obj['offline'].push(friends[i].username);

      } else {
        obj['offline'].push(friends[i].username);
      }
    } else if (friends[i].status === 'online' && friends[i].lastActivity > 10) {
      if (obj['away'] === undefined) {
        obj['away'] = [];
        obj['away'].push(friends[i].username);

      } else {
        obj['away'].push(friends[i].username);
      }
    }
  }
  return obj;
}
console.log(whosOnline([{
  username: 'David',
  status: 'online',
  lastActivity: 10
}, {
  username: 'Lucy', 
  status: 'offline',
  lastActivity: 22
}, {
  username: 'Bob', 
  status: 'online',
  lastActivity: 104
}]));


var oo = [{
}, {
  username: 'Lucy', 
  status: 'offline',
  lastActivity: 22
}, {
  username: 'Bob', 
  status: 'online',
  lastActivity: 104
}];
// console.log(oo[0].username)