# https://superuser.com/a/443633
pids=""
cpus=2
seconds=${1:-60}
trap 'for p in $pids; do kill $p; done' 0
for ((i=0;i<cpus;i++)); do while : ; do : ; done & pids="$pids $!"; done
sleep $seconds
echo 'done'
