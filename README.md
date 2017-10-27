# ex4_JS_this_closures_let_arrowFunc
Example project showing JavaScript's
+ this
+ closures
+ let
+ Fat Arrow Functions (FAF)

Each one is explained in their respective directories under this project

# ilker git refresher
## ilker Setup the remote github repo
+ To push to remote github
```
git remote add origin https://github.com/fdu-csci3444/ex4_JS_this_closures_let_arrowFunc.git
git remote -v
git remote show origin
git push -u origin master
```
## ilker some git commands refresher
+ To see local branches
```
git branch
```
+ To see local and remote tracking branches
```
git branch -a
```
+ To see commits on a remote(this case called origin) branch (for example master)
```
git log
git log origin/master
```
+ To fetch/merge from remote
    - 1st fetch; git fetch puts changes from remote repo to your local repo, but does not modify your working tree (your local working files). Note "git fetch" fetches remote called origin. 
    ```
    git fetch <remote> <branch>
    git fetch
    git fetch orgin
    git fetch anotherRemote
    ```
    - then merge; git merge to merge remote's fetched changes with local working copy of files. Hence merge creates a merge commit to your local repo.
    ```
    git merge
    git merge origin/master
    ```
+ To pull (pull = fetch + merge) from remote
```
git pull <remote>
git pull origin
```
+ git pull <remote> is equivalent to
```
git fetch <remote>
git merge orgin/<current-branch>
```
+ To pull --rebase (pull --rebase = fetch + rebase)
```
git pull --rebase <remote>
```
+ git pull --rebase <remote> is equivalent to
```
git fetch <remote>
git rebase <remote>
```