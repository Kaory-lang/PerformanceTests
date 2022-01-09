'use strict'

const text = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sollicitudin diam vitae urna molestie, in dapibus orci dapibus. Fusce non mattis orci. Suspendisse eu vehicula enim. Integer tempus consequat arcu, sit amet gravida ipsum tincidunt mollis. Aenean commodo ultrices dui, et tristique risus luctus vitae. Etiam pellentesque dignissim metus id mattis. Proin finibus feugiat dui, eget ultrices nunc tempus quis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque pretium, turpis sit amet faucibus iaculis, risus turpis rutrum ipsum, non ullamcorper eros lectus et eros. Ut convallis venenatis tortor, sed vulputate tellus gravida id. Fusce pulvinar sollicitudin condimentum. Fusce vel mi at enim ullamcorper rhoncus ut tincidunt ligula. Vestibulum ac enim id erat commodo tempor mattis et arcu. Sed in sem ipsum.

Integer tempus purus ut mauris imperdiet laoreet ac at magna. In hac habitasse platea dictumst. Nulla tempus faucibus feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elementum maximus tellus, non fermentum velit mollis finibus. Maecenas bibendum nunc odio, non luctus justo aliquet non. Vivamus eget semper neque. Morbi vel ex egestas, maximus nunc vitae, eleifend libero. Nulla sit amet libero ut sapien porttitor pretium eget eget elit. Vivamus vitae dignissim nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam erat mi, dapibus vitae semper sit amet, ultricies id enim. Curabitur porta, turpis varius sagittis molestie, augue tellus ornare ipsum, at accumsan mauris ante nec tortor. Nulla sed massa id quam efficitur pellentesque. Etiam aliquam placerat odio nec accumsan.

Morbi tellus augue, pellentesque eget erat at, mattis facilisis tortor. Phasellus sit amet vehicula lorem, eget commodo orci. Nunc et mauris neque. Vestibulum placerat sed erat sed congue. Integer sagittis vehicula aliquet. Morbi dui enim, consequat quis aliquam a, ullamcorper ut ex. Curabitur molestie mi quis sem malesuada accumsan. Vestibulum mauris nulla, dignissim id ligula a, feugiat venenatis nulla. Fusce elementum ipsum nec mi cursus, ut pretium turpis elementum. Donec quis mattis mauris, quis efficitur est. Quisque id ultrices dui, eget commodo lorem. Ut porttitor felis purus, eu tincidunt nunc maximus quis.

Sed ut vestibulum quam. Praesent in sodales nulla, ut ornare dolor. Vestibulum vitae mi non magna tempor vehicula a a ligula. Nunc luctus accumsan commodo. Cras molestie consequat laoreet. Sed in tellus id risus dapibus mollis vitae non mauris. Curabitur commodo finibus viverra. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Aenean maximus finibus ante id sodales. Proin eu sollicitudin urna, sit amet posuere tortor. Cras vehicula non arcu vel finibus. Proin sed iaculis ipsum. Etiam interdum ante quis sapien porttitor varius. Nullam massa dui, molestie nec finibus ac, ultrices ac neque. Ut pharetra libero sit amet risus pulvinar, vel condimentum magna sagittis. Praesent malesuada euismod turpis, nec eleifend nunc mollis vel. Pellentesque enim est, laoreet vitae nisi vel, condimentum varius orci. Cras nec condimentum risus. Curabitur rutrum imperdiet erat, in aliquet lacus lobortis vitae.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sollicitudin diam vitae urna molestie, in dapibus orci dapibus. Fusce non mattis orci. Suspendisse eu vehicula enim. Integer tempus consequat arcu, sit amet gravida ipsum tincidunt mollis. Aenean commodo ultrices dui, et tristique risus luctus vitae. Etiam pellentesque dignissim metus id mattis. Proin finibus feugiat dui, eget ultrices nunc tempus quis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque pretium, turpis sit amet faucibus iaculis, risus turpis rutrum ipsum, non ullamcorper eros lectus et eros. Ut convallis venenatis tortor, sed vulputate tellus gravida id. Fusce pulvinar sollicitudin condimentum. Fusce vel mi at enim ullamcorper rhoncus ut tincidunt ligula. Vestibulum ac enim id erat commodo tempor mattis et arcu. Sed in sem ipsum.

Integer tempus purus ut mauris imperdiet laoreet ac at magna. In hac habitasse platea dictumst. Nulla tempus faucibus feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elementum maximus tellus, non fermentum velit mollis finibus. Maecenas bibendum nunc odio, non luctus justo aliquet non. Vivamus eget semper neque. Morbi vel ex egestas, maximus nunc vitae, eleifend libero. Nulla sit amet libero ut sapien porttitor pretium eget eget elit. Vivamus vitae dignissim nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam erat mi, dapibus vitae semper sit amet, ultricies id enim. Curabitur porta, turpis varius sagittis molestie, augue tellus ornare ipsum, at accumsan mauris ante nec tortor. Nulla sed massa id quam efficitur pellentesque. Etiam aliquam placerat odio nec accumsan.

Morbi tellus augue, pellentesque eget erat at, mattis facilisis tortor. Phasellus sit amet vehicula lorem, eget commodo orci. Nunc et mauris neque. Vestibulum placerat sed erat sed congue. Integer sagittis vehicula aliquet. Morbi dui enim, consequat quis aliquam a, ullamcorper ut ex. Curabitur molestie mi quis sem malesuada accumsan. Vestibulum mauris nulla, dignissim id ligula a, feugiat venenatis nulla. Fusce elementum ipsum nec mi cursus, ut pretium turpis elementum. Donec quis mattis mauris, quis efficitur est. Quisque id ultrices dui, eget commodo lorem. Ut porttitor felis purus, eu tincidunt nunc maximus quis.

Sed ut vestibulum quam. Praesent in sodales nulla, ut ornare dolor. Vestibulum vitae mi non magna tempor vehicula a a ligula. Nunc luctus accumsan commodo. Cras molestie consequat laoreet. Sed in tellus id risus dapibus mollis vitae non mauris. Curabitur commodo finibus viverra. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Aenean maximus finibus ante id sodales. Proin eu sollicitudin urna, sit amet posuere tortor. Cras vehicula non arcu vel finibus. Proin sed iaculis ipsum. Etiam interdum ante quis sapien porttitor varius. Nullam massa dui, molestie nec finibus ac, ultrices ac neque. Ut pharetra libero sit amet risus pulvinar, vel condimentum magna sagittis. Praesent malesuada euismod turpis, nec eleifend nunc mollis vel. Pellentesque enim est, laoreet vitae nisi vel, condimentum varius orci. Cras nec condimentum risus. Curabitur rutrum imperdiet erat, in aliquet lacus lobortis vitae.



Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida laoreet massa id vestibulum. Sed est massa, pretium a elit quis, sollicitudin eleifend mi. Fusce ut sem magna. Pellentesque finibus libero gravida lorem luctus maximus in et tortor. Ut eu interdum ex, vel venenatis orci. Morbi eget libero turpis. Praesent nibh purus, dapibus non nulla at, cursus pulvinar lacus. Phasellus ullamcorper, nibh at gravida lacinia, nisi nunc aliquet ante, id bibendum lectus velit at arcu. Cras ac felis erat.

In sed velit eget odio rhoncus bibendum tincidunt eu odio. Ut mollis scelerisque sem, ut fringilla felis rutrum pretium. Suspendisse arcu enim, finibus in cursus in, porttitor sed urna. Vestibulum eget urna vel massa feugiat imperdiet. Donec congue leo at quam dapibus, id aliquam nisi iaculis. Sed laoreet magna velit, iaculis dignissim dui congue sed. Curabitur eget orci sapien. Quisque et metus a leo scelerisque luctus ut vitae ante.

Sed et gravida neque. Nulla tristique orci et lacus feugiat congue. Integer non magna lobortis, mollis velit at, scelerisque sem. Curabitur mollis consequat ante, ut sodales leo elementum eu. Pellentesque quis est nec dui bibendum ultrices. Donec ultrices sapien elit, in tincidunt neque blandit a. Morbi egestas elit sit amet elit elementum, ut fermentum dolor sollicitudin. Cras ut rutrum lectus. Duis semper nisi arcu.

Quisque fringilla ligula felis, dapibus malesuada risus interdum non. Etiam vitae libero nisl. Nunc interdum felis id varius rutrum. Donec urna lectus, posuere a dignissim efficitur, venenatis vitae quam. Nulla varius libero vitae ipsum ornare, id blandit velit dictum. Cras vehicula fermentum porttitor. Vestibulum aliquet purus non urna auctor malesuada ut finibus massa. Nulla facilisi. In hac habitasse platea dictumst. Vestibulum tempus id felis eu faucibus. Curabitur ut mi ac tortor porta dapibus. Donec odio lacus, vulputate non neque id, fringilla luctus justo. Donec vehicula nunc non turpis bibendum placerat. Duis sagittis mauris eu lectus ultricies, sed tempor dui imperdiet.

Vivamus a arcu urna. Sed non dui felis. Nunc at eros massa. Sed id condimentum lorem. Fusce elementum ornare maximus. Donec vel odio sit amet arcu venenatis aliquam sed quis arcu. Phasellus eu pretium elit. Pellentesque tincidunt vehicula facilisis.



Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida laoreet massa id vestibulum. Sed est massa, pretium a elit quis, sollicitudin eleifend mi. Fusce ut sem magna. Pellentesque finibus libero gravida lorem luctus maximus in et tortor. Ut eu interdum ex, vel venenatis orci. Morbi eget libero turpis. Praesent nibh purus, dapibus non nulla at, cursus pulvinar lacus. Phasellus ullamcorper, nibh at gravida lacinia, nisi nunc aliquet ante, id bibendum lectus velit at arcu. Cras ac felis erat.

In sed velit eget odio rhoncus bibendum tincidunt eu odio. Ut mollis scelerisque sem, ut fringilla felis rutrum pretium. Suspendisse arcu enim, finibus in cursus in, porttitor sed urna. Vestibulum eget urna vel massa feugiat imperdiet. Donec congue leo at quam dapibus, id aliquam nisi iaculis. Sed laoreet magna velit, iaculis dignissim dui congue sed. Curabitur eget orci sapien. Quisque et metus a leo scelerisque luctus ut vitae ante.

Sed et gravida neque. Nulla tristique orci et lacus feugiat congue. Integer non magna lobortis, mollis velit at, scelerisque sem. Curabitur mollis consequat ante, ut sodales leo elementum eu. Pellentesque quis est nec dui bibendum ultrices. Donec ultrices sapien elit, in tincidunt neque blandit a. Morbi egestas elit sit amet elit elementum, ut fermentum dolor sollicitudin. Cras ut rutrum lectus. Duis semper nisi arcu.

Quisque fringilla ligula felis, dapibus malesuada risus interdum non. Etiam vitae libero nisl. Nunc interdum felis id varius rutrum. Donec urna lectus, posuere a dignissim efficitur, venenatis vitae quam. Nulla varius libero vitae ipsum ornare, id blandit velit dictum. Cras vehicula fermentum porttitor. Vestibulum aliquet purus non urna auctor malesuada ut finibus massa. Nulla facilisi. In hac habitasse platea dictumst. Vestibulum tempus id felis eu faucibus. Curabitur ut mi ac tortor porta dapibus. Donec odio lacus, vulputate non neque id, fringilla luctus justo. Donec vehicula nunc non turpis bibendum placerat. Duis sagittis mauris eu lectus ultricies, sed tempor dui imperdiet.

Vivamus a arcu urna. Sed non dui felis. Nunc at eros massa. Sed id condimentum lorem. Fusce elementum ornare maximus. Donec vel odio sit amet arcu venenatis aliquam sed quis arcu. Phasellus eu pretium elit. Pellentesque tincidunt vehicula facilisis.
`;

// Imperative
const start2 = new Date().getMilliseconds();

let splited = text.split(' ');
let result2 = 0;

for(let word of splited){
	result2 += word.length * 2;
};

console.log('Result2:', result2);

const end2 = new Date().getMilliseconds();

console.log('Time2:', end2 - start2);
