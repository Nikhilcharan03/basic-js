let n = new Set();
n.add ("123")
n.add ("hello")
n.add ("world")
n.add (true)
n.add ("hiii")
n.add (false)
n.add (false)
n.add (-224)

console.log(n)

console.log(n.has (-224))

n.delete("hiii")

console.log(n)

n.clear()
